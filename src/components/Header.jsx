import React from 'react';
import './Header.scss';

import logo from '../assets/images/shaqo doon logo.png';

import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="header">
            <Link to='/'>
                <img src={logo} alt="shaqo doon logo" />
            </Link>
            <p className='moto'>One place for all jobs</p>
            <div className="total">
                <p className="jobs">x jobs</p>
                <p className="t-companies">y companiesx</p>
            </div>
        </div>
    );
};

export default Header;
