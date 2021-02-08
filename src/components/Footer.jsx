import React, { useState, useEffect } from 'react';
import './Footer.scss';

import { useHistory } from 'react-router-dom';

import { checkScrollingUpDown } from '../helpers/checkScroll';

const Footer = () => {
    const [opacity, setOpacity] = useState(1);
    const [translateY, setTranslateY] = useState(0);
    const [achekerUrl, setAchekerUrl] = useState('');

    const history = useHistory();

    useEffect(() => {
        checkScrollingUpDown(
            null,
            () => { setOpacity(1); setTranslateY(0) },
            () => { setOpacity(0); setTranslateY(50) },
        )

        return () => {
            checkScrollingUpDown();
        }
    }, []);

    useEffect(() => {
        setAchekerUrl(history.location.pathname.replace('/', ''))
        history.listen((location) => {
            setAchekerUrl(location.pathname.replace('/', ''));
        })
    }, [])

    return (
        <div className="footer-wrapper" style={{ opacity, transform: `translate(0, ${translateY}px)` }}>
            <div className="footer" >
                <p className="empty"></p>
                {console.log(achekerUrl)}
                <p>Creat de <a href={`https://info.shaqodoon.ro/`} target='_blank' rel='noopener noreferrer' >shado doon</a> team.</p>
                <a href="https://achecker.ca/checker/index.php?uri=referer&gid=WCAG2-AAA">
                    <img src="https://achecker.ca/images/icon_W2_aaa.jpg" alt="WCAG 2.0 (Level AAA)" height="32" width="102" />
                </a>
            </div>
        </div>
    );
};

export default Footer;