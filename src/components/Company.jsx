import React from 'react';
import './Company.scss';

import { useHistory } from 'react-router-dom';

const Comapny = ({ company }) => {

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



export default Comapny;
