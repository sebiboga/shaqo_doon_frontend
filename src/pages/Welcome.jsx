import React from 'react';
import './Welcome.scss';

const Welcome = () => {

    return (
        <div className="welcome">
            <div className="spacer"></div>
            <h1>Buna venit pe <strong>shaqo doon!</strong></h1>
            <div className="message">
                <h2>Cauti un loc de munca?</h2>
                <div className="mission">
                    <h3>Esti in locul potrivit!</h3>
                    <h3>Misiunea noastra este<br />sa agregam toate locurile de munca inturn singur loc<br />pentru a te ajuta sa gasesti mai usor locul de munca ideal pentru tine!</h3>
                </div>
            </div>
        </div >
    );
};

export default Welcome;
