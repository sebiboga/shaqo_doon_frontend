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

    const toggleSearch = () => {
        document.querySelector("#search_input").classList.toggle("activ");
    }

    const handleSearch = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            setIsLoading(true);
            setReset(true);
          }
    }

    const handleQueryChande = (e) => {
        setQuery(e);
        if (e === '' && reset) {
            setIsLoading(true);
            setReset(false);
        }
    }

    const detectEnter = () => {
        // const theInput = document.getElementsByClassName('query-input')[0];
        // theInput.addEventListener('keydown', (e) => {
        //     if (e.key === 'Enter') {
        //         handleSearch();
        //     }
        // })
    }

    useEffect(() => {
        detectEnter()
        return () => {
            detectEnter()
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
                <div className id="wrap">
                    <form action="" autocomplete="on">
                    <input id="search_input" name="search" type="text" placeholder="What're we looking for ?" onKeyDown={handleSearch} onChange={(e) => handleQueryChande(e.target.value)}/> 
                    <input id="search_submit" value="Rechercher" onClick={toggleSearch} /> 
                    </form>
                </div>
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

