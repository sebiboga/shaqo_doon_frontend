import React from 'react'
import './search_selection.style.scss';
import iconx from '../../assets/images/xphoto.png'

const SearchSelection = ({ searchSelection, handleClick }) => {

    return (
        <div className="search_selection" onClick={handleClick}>
                {searchSelection}
                <img src={iconx}/>
        </div>
    );
};

export default SearchSelection;
