import React from 'react';
import './job.style.scss';

import { connect } from 'react-redux';
import { setIsLoading } from '../../redux/helpers/helpers.actions';
import { setCity, setCompany, setCountry } from '../../redux/search/search.actions';

import companyLogo from '../../assets/images/company.png';
import locationLogo from '../../assets/images/location.jpg'

const Job = ({
    company, title, city, country, link,
    setIsLoading,
    setCity, setCompany, setCountry
}) => {

    const handleClickCity = () => {
        setIsLoading(true);
        setCity(encodeURIComponent(city));
    }

    const handleClickCountry = () => {
        setIsLoading(true);
        setCountry(country);
    }

    const handleClickCompany = () => {
        setIsLoading(true);
        setCompany(company);
    }

    return (
        <div className="job">
            <div className="content">
                <div className="title"><a href={`${link}`} target='_blank' rel='noopener noreferrer' ><span dangerouslySetInnerHTML={{ __html: title }} /></a></div>
                <div className="company">
                    <img src={companyLogo} alt="" />
                    <p className='clickable' onClick={handleClickCompany} >{company}</p>
                </div>
                <div className="location">
                    <img src={locationLogo} alt="" />
                    <p >
                        <span className='clickable' dangerouslySetInnerHTML={{ __html: city }} onClick={handleClickCity} />,
                        <span> </span>
                        <span className='clickable' dangerouslySetInnerHTML={{ __html: country }} onClick={handleClickCountry} />
                    </p>
                </div>
            </div>

            <div className="details">
                <a href={`${link}`} target='_blank' rel='noopener noreferrer' >Detalii</a>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setIsLoading: (bool) => dispatch(setIsLoading(bool)),
    setCity: (city) => dispatch(setCity(city)),
    setCountry: (country) => dispatch(setCountry(country)),
    setCompany: (company) => dispatch(setCompany(company)),
})

export default connect(null, mapDispatchToProps)(Job);
