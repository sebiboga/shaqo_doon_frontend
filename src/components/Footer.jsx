import React, { useState, useEffect } from 'react';
import './Footer.scss';

import humansTxt from '../assets/gif/humans-txt.gif';
import aaaChecker from '../assets/images/icon_W2_aaa.jpg';

// import { useHistory } from 'react-router-dom';
import { checkScrollingUpDown } from '../helpers/checkScroll';

const Footer = () => {
    const [opacity, setOpacity] = useState(1);
    const [translateY, setTranslateY] = useState(0);
    // const [achekerUrl, setAchekerUrl] = useState('');

    // const history = useHistory();

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

    // useEffect(() => {
    //     setAchekerUrl(history.location.pathname.replace('/', ''))
    //     history.listen((location) => {
    //         setAchekerUrl(location.pathname.replace('/', ''));
    //     })
    // }, [])

    return (
        <div className="footer-wrapper" style={{ opacity, transform: `translate(0, ${translateY}px)` }}>
            <div className="footer" >
                <p className="empty"></p>
                <p>Creat de <a href={`https://info.shaqodoon.ro/`} target='_blank' rel='noopener noreferrer' >shado doon</a> team.</p>
                <div className="badges">
                    <a href="https://achecker.ca/checker/index.php?uri=referer&gid=WCAG2-AAA" className="aaa">
                        <img src={aaaChecker} alt="WCAG 2.0 (Level AAA)" height="32" width="102" />
                    </a>
                    <a href="https://shaqodoon.ro/humans.txt" className="humanstxt" target='_blank' rel='noopener noreferrer'>
                        <img src={humansTxt} alt="shaqo doon humans txt" style={{ height: '32px' }} />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Footer;