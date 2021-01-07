import React, { useEffect, useState } from 'react';
import './Jobs.scss';

import { connect } from 'react-redux';
import { getAllJobs } from '../redux/jobs/jobs.actions';
import { useParams } from 'react-router-dom';

import Job from '../components/Job';

const AllJobs = ({ jobs, getAllJobs, selectedCompany }) => {

    const [loading, setLoading] = useState(true);

    const params = useParams();
    console.log(params)

    useEffect(() => {
        if (jobs === null) {
            getAllJobs();
            setLoading(false)
        } else {
            setLoading(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(loading)
    if (loading) {
        return (
            <span>loading...</span>
        );
    } else {
        return (
            <div className="jobs">
                {/* All jobs */}
                {jobs ? jobs.map(({ company, title, city, country, link }) =>
                    <Job
                        key={`${link} ${Math.random()}`}
                        company={company}
                        title={title}
                        city={city}
                        country={country}
                        link={link}
                    />
                ) : null}
            </div>
        )
    }
};

const mapStateToProps = ({ jobs, companies }) => ({
    jobs: jobs.all,
    selectedCompany: companies.companySelected
})

const mapDispatchToProps = dispatch => ({
    getAllJobs: () => dispatch(getAllJobs()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs);
