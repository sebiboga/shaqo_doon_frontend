import React, { useEffect, useState } from 'react';
import './Jobs.scss';

import { connect } from 'react-redux';
import { getAllJobs, getJobsCompany } from '../redux/jobs/jobs.actions';
import { getAllCompanies } from '../redux/companies/companies.actions';
import { useHistory, useParams } from 'react-router-dom';

import Job from '../components/Job';

const AllJobs = ({ jobs, getAllJobs, companies, getJobsCompany, jobsCompany, getAllCompanies }) => {

    const [loading, setLoading] = useState(true);
    const [isComapaniesLoaded, setIsCompaniesLoaded] = useState(false);

    const history = useHistory();
    const params = useParams();

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
            if (params.company) {
                let companySelected;
                // get the api from all jobs from this company
                companies ?
                    companySelected = companies.filter(
                        // check if there is any company based on the company name from url
                        company => company.company === params.company ||
                            // check if there is any company based on the company name from url after replacing '-' with ' '
                            company.company === params.company.replace(/-/g, ' ')
                    ) : console.log('empty')
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

    const renderJobs = (theJobs) => {
        return theJobs.map(({ company, title, city, country, link }) => {
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
    }

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
                {params.company ?
                    renderJobs(jobsCompany)
                    :
                    renderJobs(jobs)
                }
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
