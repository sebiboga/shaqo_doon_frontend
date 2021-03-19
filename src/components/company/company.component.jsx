import React from 'react';
import './company.style.scss';

const Comapny = ({ company, link }) => {

    return (
        <a className="company-tab" href={link} target='_blank' rel='noopener noreferrer'  >
            <h1>{company}</h1>
            {/* <span className='jobs-company'>({jobs})</span> */}
        </a>
    );
};



export default Comapny;
