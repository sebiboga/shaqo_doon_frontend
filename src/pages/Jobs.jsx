import React, { useEffect, useState } from 'react';
import './Jobs.scss';

import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllJobs, getJobsCompany } from '../redux/jobs/jobs.actions';
import { getAllCompanies } from '../redux/companies/companies.actions';
import { setIsLoading } from '../redux/helpers/helpers.actions';

import Job from '../components/Job';

const AllJobs = (
    {
        jobs, getAllJobs,
        companies, getAllCompanies,
        getJobsCompany, jobsCompany,
        isLoading, setIsLoading
    }
) => {

    // const [loading, setLoading] = useState(true); //  this was replaced with redux
    const [isCompaniesLoaded, setCompaniesLoaded] = useState(false);

    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        // why do I need companies loaded? asnwer: to check if the company exist if user goes direct to jobs/company-name
        if (!companies) {
            getAllCompanies(() => { setCompaniesLoaded(true) });
        } else {
            // if companies are already loaded set it to true
            setCompaniesLoaded(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // check if the companies are loaded, if not, wait
        if (isCompaniesLoaded) {
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
                    getJobsCompany({ api: companySelected[0].link, cb: () => { setIsLoading(false) } })
                    // if company do not exist redirect to companies page
                    : history.push('/companies')
            } else {
                if (jobs) {
                    console.log(1)
                    setIsLoading(false)
                } else {
                    console.log(2)
                    getAllJobs(() => { setIsLoading(false) });
                }
            }
        }
        // because I make it to render when 'isLoading' changes it render extra 1 time after setIsLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCompaniesLoaded, isLoading])

    const renderJobs = (theJobs) => {
        if (theJobs === null) {
            setCompaniesLoaded(false);

        }

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

    if (isLoading) {
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

const mapStateToProps = ({ jobs, companies, helpers }) => ({
    jobs: jobs.all,
    jobsCompany: jobs.jobsCompany,
    companies: companies.all,
    isLoading: helpers.isLoading
})

const mapDispatchToProps = dispatch => ({
    getAllJobs: (jobsLoaded) => dispatch(getAllJobs(jobsLoaded)),
    getJobsCompany: (data) => dispatch(getJobsCompany(data)),
    getAllCompanies: (cb) => dispatch(getAllCompanies(cb)),
    setIsLoading: (bool) => dispatch(setIsLoading(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs);
