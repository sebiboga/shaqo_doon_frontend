import React from 'react';
import './Company.scss';

import { connect } from 'react-redux';
import { selectCompany } from '../redux/companies/companies.actions';
import { useHistory } from 'react-router-dom';

const Comapny = ({ company, link, selectCompany }) => {

    const history = useHistory();

    const handleClick = () => {
        // selectCompany(company);
        history.push(`/jobs/${company}`)
    }

    return (
        <div className="company-tab" onClick={handleClick}>
            <h1>{company}</h1>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    selectCompany: (selectedCompany) => dispatch(selectCompany(selectedCompany)),
})

export default connect(null, mapDispatchToProps)(Comapny);
