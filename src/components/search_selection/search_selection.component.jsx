import React from 'react'
import './search_selection.style.scss';

import iconXImg from '../../assets/images/xphoto.png';

const SearchSelection = ({ searchSelection, handleClick }) => {

    return (
        <div className="search_selection" style={{ display: searchSelection ? '' : 'none' }}>
            <p dangerouslySetInnerHTML={{ __html: decodeURIComponent(searchSelection) }}></p>
            <img src={iconXImg} alt="shaqodoon close icon" onClick={handleClick} />
        </div>
    );
};

export default SearchSelection;
