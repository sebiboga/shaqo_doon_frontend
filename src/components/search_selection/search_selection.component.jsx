import React from 'react'
import './search_selection.style.scss';

const SearchSelection = ({ searchSelection, handleClick }) => {

    return (
        <div className="search_selection" onClick={handleClick}>
            {searchSelection}
        </div>
    );
};

export default SearchSelection;
