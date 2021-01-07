import React from 'react';
import './Job.scss';

import companyLogo from '../assets/images/company.png';
import locationLogo from '../assets/images/location.jpg'

const Job = ({ company, title, city, country, link }) => {

    return (
        <div className="job">
            <div className="content">
                <div className="title">{title}</div>
                <div className="company">
                    <img src={companyLogo} alt="" />
                    <p>{company}</p>
                </div>
                <div className="location">
                    <img src={locationLogo} alt="" />
                    <p>{`${city}, ${country}`}</p>
                </div>
            </div>

            <div className="details">
                <a href={`${link}`} target='_blank' rel='noopener noreferrer' >Detalii</a>
            </div>
        </div>
    );
};

export default Job;
