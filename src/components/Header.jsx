import React, { useEffect, useState } from 'react';
import './Header.scss';

import logo from '../assets/images/shaqo doon logo.png';
import info from '../assets/images/info.png';
import loading from '../assets/gif/loading 2.gif';

import { connect } from 'react-redux';
import { getTotal } from '../redux/total/total.actions';

import { Link } from 'react-router-dom';

import { scrollPosition } from '../helpers/checkScroll';

import Menu from './Menu';

const Header = ({ getTotal, total }) => {
    const [imgSize, setImgSize] = useState('150px');
    const [fontSize1, setFontSize1] = useState('23px');
    const [fontSize2, setFontSize2] = useState('21px');

    const reset = () => {
        setImgSize('150px');
        setFontSize1('23px');
        setFontSize2('21px');
    };

    const minimize = () => {
        setImgSize('100px');
        setFontSize1('18px');
        setFontSize2('17px');
    }

    useEffect(() => {
        getTotal();
        scrollPosition(minimize, reset);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="header-wrapper">
            <div className="header" >
                <div className="image">
                    {/* <Link to='https://info.shaqodoon.ro/' alt='info shaqo doon'>
                        <img src={info} alt="info shaqo doon" style={{ width: '30px', marginBottom: '60px' }} />
                    </Link> */}
                    <Link to='/' >
                        <img src={logo} alt="shaqo doon logo" style={{ width: imgSize, height: imgSize }} />
                    </Link>
                </div>

                <p className='moto' style={{ fontSize: fontSize1 }}>Un singur loc pentru toate locurile de muncă</p>
                <div className="total" style={{ fontSize: fontSize2 }}>
                    <div className="jobs"><span className='white'>{total ? total.jobs : <img src={loading} alt='shaqo doon loading' />} </span> <span className='text'>locuri de muncă</span></div>
                    <div className="t-companies"><span className='white'>{total ? total.companies : <img src={loading} alt='shaqo doon loading' />} </span> <span className='text'>companii</span></div>
                </div>
            </div>
            <Menu />
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
