import React, { useEffect } from 'react';
import './Header.scss';

import logo from '../assets/images/shaqo doon logo.png';

import { connect } from 'react-redux';
import { getTotal } from '../redux/total/total.actions';

import { Link } from 'react-router-dom';

const Header = ({ getTotal, total }) => {

    useEffect(() => {
        getTotal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="header">
            <Link to='/'>
                <img src={logo} alt="shaqo doon logo" />
            </Link>
            <p className='moto'>One place for all jobs</p>
            <div className="total">
                <p className="jobs"><span className='white'>{total ? total.jobs : 0} </span>  job-uri</p>
                <p className="t-companies"><span className='white'>{total ? total.companies : 0} </span>  companii</p>
            </div>
        </div>
    );

};

const mapStateToProps = ({ total }) => ({
    total,
});

const mapDispatchToState = dispatch => ({
    getTotal: () => dispatch(getTotal()),
})


export default connect(mapStateToProps, mapDispatchToState)(Header);
