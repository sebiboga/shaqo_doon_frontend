import React from 'react';
import './Company.scss';

// import { useHistory } from 'react-router-dom';

const Comapny = ({ company, link }) => {

    // const history = useHistory();

    // const handleClick = () => {
    //     // selectCompany(company);
    //     history.push(`/locuri-de-munca/${company.replace(/ /g, '-')}`)
    // }

    return (
        <a className="company-tab" href={link} target='_blank' rel='noopener noreferrer'  >
            <h1>{company}</h1>
            {/* <span className='jobs-company'>({jobs})</span> */}
        </a>
    );
};



export default Comapny;
