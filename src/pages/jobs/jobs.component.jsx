import React, { useState, useEffect } from 'react';
import './jobs.style.scss';

import { useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllJobs, getJobsCompany, clearJobs } from '../../redux/jobs/jobs.actions';
import { getAllCompanies } from '../../redux/companies/companies.actions';
import { setIsLoading, setDisplaySearchBar } from '../../redux/helpers/helpers.actions';
import { setCity, setCompany, setCountry, setQuery } from '../../redux/search/search.actions';

import loading from '../../assets/gif/loading 2.gif';

import Job from '../../components/job/job.component';

const AllJobs = ({
    jobs, getAllJobs, clearJobs,
    isLoading, setIsLoading,
    city, country, company, q,
    setCity, setCountry, setCompany, setQuery,
    setDisplaySearchBar
}) => {
    const [queryChecked, setQueryChecked] = useState(false);

    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        // console.log('control')
        const query = location.search;
        if (query) {
            const params = new URLSearchParams(query);
            // console.log(params)
            const city = params.get('city');
            const country = params.get('country');
            const company = params.get('company');
            const q = params.get('q');

            if (city) { setCity(city) };
            if (country) { setCountry(country) };
            if (company) { setCompany(company) };
            if (q) { setQuery(q) };
        } else {
            // console.log('empty')
        }

        setQueryChecked(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createQuery = () => {
        let query = []
        if (city) {
            query.push(`city=${city}`)
        }
        if (country) {
            query.push(`country=${country}`)
        }
        if (company) {
            query.push(`company=${company}`)
        }
        if (q) {
            query.push(`q=${q.trim().replace(/ /g, '+')}`)
        }

        // console.log(query)
        query = `?${query.join('&')}`
        // console.log(query)

        history.push({ 'search': query })

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
        if (queryChecked) { getAllJobs(() => { setIsLoading(false) }, createQuery()); }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, queryChecked])

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

    setCity: (city) => dispatch(setCity(city)),
    setCountry: (country) => dispatch(setCountry(country)),
    setCompany: (company) => dispatch(setCompany(company)),
    setQuery: (e) => dispatch(setQuery(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs);
