import React, { useState, useEffect } from 'react';
import './Footer.scss';

import { checkScrollingUpDown } from '../helpers/checkScroll';

const Footer = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        checkScrollingUpDown(
            null,
            () => { setOpacity(1); },
            () => { setOpacity(0); },
        )

        return () => {
            checkScrollingUpDown();
        }
    }, []);

    return (
        <div className="footer" style={{ opacity }}>
            Creat de <a href={`https://info.shaqodoon.ro/`} target='_blank' rel='noopener noreferrer' >shado doon</a> team.
        </div>
    );
};

export default Footer;