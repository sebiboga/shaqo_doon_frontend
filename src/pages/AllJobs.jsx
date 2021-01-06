import React, { useEffect } from 'react';
import './AllJobs.scss';

import { connect } from 'react-redux';
import { getAllJobs } from '../redux/jobs/jobs.actions';

import Job from '../components/Job';

const AllJobs = ({ jobs, getAllJobs }) => {

    useEffect(() => {
        if (jobs === null) {
            getAllJobs();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="all-jobs">
            {console.log(jobs)}
            All jobs
            {jobs ? jobs.slice(1, 5).map(({ company, title, city, country, link }) =>
                <Job
                    key={link}
                    company={company}
                    title={title}
                    city={city}
                    country={country}
                    link={link}
                />
            ) : null}
        </div>
    );
};

const mapStateToProps = ({ jobs }) => ({
    jobs,
})

const mapDispatchToProps = dispatch => ({
    getAllJobs: () => dispatch(getAllJobs()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs);
