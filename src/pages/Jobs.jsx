import React, { useEffect } from 'react';
import './Jobs.scss';

// import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllJobs, getJobsCompany, clearJobs } from '../redux/jobs/jobs.actions';
import { getAllCompanies } from '../redux/companies/companies.actions';
import { setIsLoading, setDisplaySearchBar } from '../redux/helpers/helpers.actions';

import loading from '../assets/gif/loading 2.gif';

import Job from '../components/Job';

const AllJobs = ({
    jobs, getAllJobs, clearJobs,
    isLoading, setIsLoading,
    city, country, company, q,
    setDisplaySearchBar
}) => {

    const createQuery = () => {
        let query = '?'
        if (city) {
            query += `&city=${city}`
        }
        if (country) {
            query += `&country=${country}`
        }
        if (company) {
            query += `&company=${company}`
        }
        if (q) {
            query += `&q=${q.trim().replace(/ /g, '+')}`
        }
        return query;
    }

    // console.log(q.trim().replace(/\s+/g, '+'))

    useEffect(() => {
        setDisplaySearchBar(true)
        return () => {
            setDisplaySearchBar(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getAllJobs(() => { setIsLoading(false) }, createQuery());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    useEffect(() => {
        return () => {
            clearJobs();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderJobs = (theJobs) => {
        if (theJobs === null) {
            return <div className="error-loading-jobs">something went wrong, please refresh</div>
        } else if (theJobs.length === 0) {
            return <div className="no_results">No results</div>
        }
        else {
            return theJobs.map(({ company, title, city, country, link }, index) => {
                return (<Job
                    key={`${index} - ${company}`}
                    company={company}
                    title={title}
                    city={city}
                    country={country}
                    link={link}
                />)
            })
        }
    }

    if (isLoading) {
        // console.log('loading')
        return (
            <div className="loading">
                <img src={loading} alt="shaqo doon loading" />
            </div>
        );
    } else {
        return (
            <div className="jobs">
                <a href="#top" id='top-jobs' title="top" >top</a>
                {
                    renderJobs(jobs)
                }
            </div>
        )
    }
};

const mapStateToProps = ({ jobs, companies, helpers, search }) => ({
    jobs: jobs.all,
    jobsCompany: jobs.jobsCompany,
    companies: companies.all,
    isLoading: helpers.isLoading,

    city: search.city,
    country: search.country,
    company: search.company,
    q: search.q,
})

const mapDispatchToProps = dispatch => ({
    getAllJobs: (jobsLoaded, searchQuery) => dispatch(getAllJobs(jobsLoaded, searchQuery)),
    getJobsCompany: (data) => dispatch(getJobsCompany(data)),
    getAllCompanies: (cb) => dispatch(getAllCompanies(cb)),
    setIsLoading: (bool) => dispatch(setIsLoading(bool)),
    setDisplaySearchBar: (bool) => dispatch(setDisplaySearchBar(bool)),
    clearJobs: () => dispatch(clearJobs()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs);
