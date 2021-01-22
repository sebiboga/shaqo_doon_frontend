import React, { useEffect } from 'react';
import './Companies.scss';

import { connect } from 'react-redux';
import { getAllCompanies } from '../redux/companies/companies.actions';

import Company from '../components/Company';

const Companies = ({ companies, getAllCompanies }) => {

    useEffect(() => {
        if (companies === null) {
            getAllCompanies();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


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
};

const mapStateToProsp = ({ companies }) => ({
    companies: companies.all,
})

const mapDispatchToProps = dispatch => ({
    getAllCompanies: () => dispatch(getAllCompanies()),
})

export default connect(mapStateToProsp, mapDispatchToProps)(Companies);
