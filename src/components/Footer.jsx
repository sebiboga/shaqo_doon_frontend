import React, { useState, useEffect } from 'react';
import './Footer.scss';

import { checkScrollingUpDown } from '../helpers/checkScroll';

const Footer = () => {
    const [opacity, setOpacity] = useState(1);
    const [translateY, setTranslateY] = useState(0)

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

    return (
        <div className="footer-wrapper" style={{ opacity, transform: `translate(0, ${translateY}px)` }}>
            <div className="footer" >
                <p className="empty"></p>
                <p>Creat de <a href={`https://info.shaqodoon.ro/`} target='_blank' rel='noopener noreferrer' >shado doon</a> team.</p>
                <a href="https://achecker.ca/checker/index.php?uri=referer&gid=WCAG2-AA%22%3E" target='_blank' >
                    <img src="https://achecker.ca/images/icon_W2_aa.jpg" alt="WCAG 2.0 (Level AA)" height="32" width="102" />
                </a>
            </div>
        </div>
    );
};

export default Footer;