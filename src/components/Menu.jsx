import React from 'react';
import './Menu.scss';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { setIsLoading } from '../redux/helpers/helpers.actions';


const Header = ({ setIsLoading }) => {

    return (
        <div className="menu-wrapper">
            <div className="menu">
                <Link to='/locuri-de-munca' jobs={'allJobs'} onClick={() => setIsLoading(true)}>Toate Locurile de Muncă</Link>
                <Link to='/companii' onClick={() => setIsLoading(true)}>Companii</Link>
            </div>
        </div>
    );
};

const mapDispatcToProps = dispatch => ({
    setIsLoading: (bool) => dispatch(setIsLoading(bool)),
})


export default connect(null, mapDispatcToProps)(Header);
