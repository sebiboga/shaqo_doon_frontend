import React from 'react';
import './Menu.scss';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { setIsLoading } from '../redux/helpers/helpers.actions';


const Header = ({ setIsLoading }) => {

    return (
        <div className="menu">
            <Link to='/jobs' jobs={'allJobs'} title='some title' onClick={() => setIsLoading(true)}>Toate Locurile de Muncă</Link>
            <Link to='/companies' onClick={() => setIsLoading(true)}>Companii</Link>
        </div>
    );
};

const mapDispatcToProps = dispatch => ({
    setIsLoading: (bool) => dispatch(setIsLoading(bool)),
})


export default connect(null, mapDispatcToProps)(Header);
