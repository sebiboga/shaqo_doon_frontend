import React, { useEffect, useState } from 'react';
import './Companies.scss';

import loading from '../assets/gif/loading 2.gif';

import { connect } from 'react-redux';
import { getAllCompanies } from '../redux/companies/companies.actions';

import Company from '../components/Company';

const Companies = ({ companies, getAllCompanies }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (companies === null) {
            getAllCompanies(() => { setIsLoading(false) });
        } else {
            setIsLoading(false)
        }

        // if comes from jobs page, the companies are already loaded
        // if (companies.length) {
        // }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return (
            <div className="loading">
                <img src={loading} alt="shaqo doon loading" />
            </div>
        )
    } else {
        return (
            <div className="companies">
                {companies ? companies.map(({ company, link, jobs }) =>
                    <Company
                        key={company ? company : Math.random()}
                        company={company}
                        link={link}
                        jobs={jobs}
                    />
                ) : null}
            </div>
        );
    }
};

const mapStateToProsp = ({ companies }) => ({
    companies: companies.all,
})

const mapDispatchToProps = dispatch => ({
    getAllCompanies: (cb) => dispatch(getAllCompanies(cb)),
})

export default connect(mapStateToProsp, mapDispatchToProps)(Companies);
