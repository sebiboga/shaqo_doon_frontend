import React from 'react';
import './Job.scss';

const Job = ({ company, title, city, country, link }) => {

    return (
        <div className="job">
            <div className="title">{title}</div>
            <div className="company">{company}</div>
            <div className="location">
                <div className="country">{country}</div>
                <div className="city">{city}</div>
            </div>
            <div className="details">
                <a href={`${link}`} target='_blank' rel='noopener noreferrer' >Detalii</a>
            </div>
        </div>
    );
};

export default Job;
