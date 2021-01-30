import React from 'react';
import './Job.scss';

import companyLogo from '../assets/images/company.png';
import locationLogo from '../assets/images/location.jpg'

const Job = ({ company, title, city, country, link }) => {

    // const testing = decodeURI(city)

    return (
        <div className="job">
            <div className="content">
                <div className="title"><a href={`${link}`} target='_blank' rel='noopener noreferrer' ><span dangerouslySetInnerHTML={{ __html: title }} /></a></div>
                <div className="company">
                    <img src={companyLogo} alt="" />
                    <p>{company}</p>
                </div>
                <div className="location">
                    <img src={locationLogo} alt="" />
                    <p> <span dangerouslySetInnerHTML={{ __html: city }} /> , <span dangerouslySetInnerHTML={{ __html: country }} /> </p>
                </div>
            </div>

            <div className="details">
                <a href={`${link}`} target='_blank' rel='noopener noreferrer' >Detalii</a>
            </div>
        </div>
    );
};

export default Job;
