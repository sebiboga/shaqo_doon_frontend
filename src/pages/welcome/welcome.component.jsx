import React from 'react';
import './welcome.style.scss';

const Welcome = () => {

    return (
        <div className="welcome">
            <div className="spacer"></div>
            <h1>Bun venit pe <strong>shaqo doon!</strong></h1>
            <div className="message">
                <h2>Cauți un loc de muncă?</h2>
                <div className="mission">
                    <h3>Ești în locul potrivit!</h3>
                    <h3>Misiunea noastră este<br />să agregăm toate locurile de muncă într-un singur loc<br />pentru a te ajuta să găsești mai ușor locul de muncă ideal pentru tine!</h3>
                </div>
            </div>
            <div className="spacer-2"></div>
        </div >
    );
};

export default Welcome;
