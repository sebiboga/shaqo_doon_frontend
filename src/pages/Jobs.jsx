import React, { useEffect, useState } from 'react';
import './Jobs.scss';

import { connect } from 'react-redux';
import { getAllJobs, getJobsCompany } from '../redux/jobs/jobs.actions';
import { getAllCompanies } from '../redux/companies/companies.actions';
import { useLocation, useHistory } from 'react-router-dom';

import Job from '../components/Job';

const AllJobs = ({ jobs, getAllJobs, companies, getJobsCompany, jobsCompany, getAllCompanies }) => {

    const [loading, setLoading] = useState(true);
    const [isComapaniesLoaded, setIsCompaniesLoaded] = useState(false);

    const location = useLocation();
    const history = useHistory();

    // if client access url /jobs/company, it get the name og the company from url
    const checkCompany = () => {
        let path = location.pathname;
        path = path.replace(/\/jobs\//i, ''); // remove '/jobs/' if exist
        path = path.replace(/\/jobs/i, ''); // remove '/jobs' if exist

        if (path.includes('/')) { path = path.slice(0, path.length - 1) };


        // return name on the company from url
        return path;
    }

    useEffect(() => {
        if (!companies) {
            getAllCompanies(() => { setIsCompaniesLoaded(true) });
        } else {
            // if companies are already loaded set it to true
            setIsCompaniesLoaded(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // check if the companies are loaded, if not, wait
        if (isComapaniesLoaded) {
            // get the name of the company from urk
            const selectedCompany = checkCompany();
            if (selectedCompany) {
                let companySelected;
                // get the api from all jobs from this company
                companies ? companySelected = companies.filter(company => company.company === selectedCompany) : console.log('empty')
                companySelected.length ?
                    // if comapny exist show jobs
                    getJobsCompany({ api: companySelected[0].link, cb: () => { setLoading(false) } })
                    // if company do not exist redirect to companies page
                    : history.push('/companies')
            } else {
                getAllJobs(() => { setLoading(false) });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isComapaniesLoaded])

    if (loading) {
        // console.log('loading')
        return (
            <span>loading...</span>
        );
    } else {
        return (
            <div className="jobs">
                {/* All jobs */}
                {/* I have to somehow DRY this */}
                {jobsCompany ?
                    jobsCompany.map(({ company, title, city, country, link }) => {

                        return (<Job
                            key={`${link} ${Math.random()}`}
                            company={company}
                            title={title}
                            city={city}
                            country={country}
                            link={link}
                        />)
                    }
                    )

                    : jobs.map(({ company, title, city, country, link }) =>
                        <Job
                            key={`${link} ${Math.random()}`}
                            company={company}
                            title={title}
                            city={city}
                            country={country}
                            link={link}
                        />
                    )}
            </div>
        )
    }
};

const mapStateToProps = ({ jobs, companies }) => ({
    jobs: jobs.all,
    jobsCompany: jobs.jobsCompany,
    jobsA: jobs,
    companies: companies.all
})

const mapDispatchToProps = dispatch => ({
    getAllJobs: (jobsLoaded) => dispatch(getAllJobs(jobsLoaded)),
    getJobsCompany: (data) => dispatch(getJobsCompany(data)),
    getAllCompanies: (cb) => dispatch(getAllCompanies(cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs);
