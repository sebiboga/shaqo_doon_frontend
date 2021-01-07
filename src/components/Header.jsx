import React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="header">
            <Link to='/'>
                <h1>Shaqo Doon</h1>
                <p>One place for all jobs</p>
            </Link>
        </div>
    );
};

export default Header;
