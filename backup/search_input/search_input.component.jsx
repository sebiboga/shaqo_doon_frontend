import React, { useState, useEffect } from 'react'
import './search_input.style.scss';

import { connect } from 'react-redux';
import { setQuery, clearQuery } from '../../redux/search/search.actions';
import { setIsLoading } from '../../redux/helpers/helpers.actions';

import clearQueryImg from '../../assets/images/close-icon.png';
import searchImg from '../../assets/images/search2.png';


const SearchInput = ({ q, setQuery, clearQuery, setIsLoading }) => {
    const [reset, setReset] = useState(false);

    const handleClear = () => {
        setIsLoading(true);
        clearQuery();
    }

    const handleSearch = () => {
        setIsLoading(true);
        setReset(true);
    }

    const handleQueryChande = (e) => {
        setQuery(e);
        if (e === '' && reset) {
            setIsLoading(true);
            setReset(false);
        }
    }

    const detectEnterPress = () => {
        const theInput = document.getElementsByClassName('query-input')[0];
        if (theInput) {
            theInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            })
        }
    }

    useEffect(() => {
        detectEnterPress()
        return () => {
            detectEnterPress()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        // <div className="search-input">
        //     <div className="clear-query" onClick={handleClear}>X</div>
        //     <div className="search" onClick={handleSearch}>S</div>
        //     <input value={q} onChange={(e) => handleQueryChande(e.target.value)} className='query-input' />
        // </div>
        <div className="search-input">
            <div className="clear-query" onClick={handleClear} style={{ opacity: q ? 1 : 0 }}><img src={clearQueryImg} alt="clear icon shaqodoon" /></div>
            <div className="search" onClick={handleSearch} ><img src={searchImg} alt="search icon shaqodoon" /></div>
            <input value={q} onChange={(e) => handleQueryChande(e.target.value)} className='query-input' />
        </div>
    );
};

const mapStateToProps = ({ search }) => ({
    q: search.q,
})

const mapDispatchToProps = (dispatch) => ({
    setQuery: (e) => dispatch(setQuery(e)),
    clearQuery: () => dispatch(clearQuery()),
    setIsLoading: (bool) => dispatch(setIsLoading(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);

