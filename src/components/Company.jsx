import React from 'react';
import './Company.scss';

import { useHistory } from 'react-router-dom';

const Comapny = ({ company, jobs }) => {

    const history = useHistory();

    const handleClick = () => {
        // selectCompany(company);
        history.push(`/jobs/${company.replace(/ /g, '-')}`)
    }

    return (
        <div className="company-tab" onClick={handleClick}>
            <h1>{company}</h1>
            <span className='jobs-company'>({jobs})</span>
        </div>
    );
};



export default Comapny;
