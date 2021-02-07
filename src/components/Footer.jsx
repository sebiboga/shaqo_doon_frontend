import React, { useState, useEffect } from 'react';
import './Footer.scss';

import { checkScrollingUpDown } from '../helpers/checkScroll';

const Footer = () => {
    const [opacity, setOpacity] = useState(1);
    const [translateY, setTranslateY] = useState(0)

    useEffect(() => {
        checkScrollingUpDown(
            null,
            () => { setOpacity(1); setTranslateY(1) },
            () => { setOpacity(0); setTranslateY(1) },
        )

        return () => {
            checkScrollingUpDown();
        }
    }, []);

    return (
        <div className="footer" style={{ opacity, transform: `translate(0, ${translateY}px)` }}>
            Creat de <a href={`https://info.shaqodoon.ro/`} target='_blank' rel='noopener noreferrer' >shado doon</a> team.
        </div>
    );
};

export default Footer;