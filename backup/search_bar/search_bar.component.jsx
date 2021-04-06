import React from 'react'
import './search_bar.style.scss';

import { connect } from 'react-redux';
import { setQuery, clearQuery, clearCity, clearCompany, clearCountry } from '../../redux/search/search.actions';
import { setIsLoading } from '../../redux/helpers/helpers.actions';

import SearchSelection from '../search_selection/search_selection.component';
import SearchInput from '../search_input/search_input.component';

const SearchBar = ({
    city, country, company, q,
    setQuery, clearQuery, clearCity, clearCompany, clearCountry,
    setIsLoading,
    isSearchBadDisplayed
}) => {
    const handleClearCity = () => {
        setIsLoading(true);
        clearCity();
    }

    const handleClearCountry = () => {
        setIsLoading(true);
        clearCountry();
    }

    const handleClearCompany = () => {
        setIsLoading(true);
        clearCompany();
    }

    return (
        <div className="search_bar_wrapper" style={{ display: isSearchBadDisplayed ? '' : 'none' }}>
            <div className="search_bar">
                <SearchInput />
                <SearchSelection searchSelection={country} handleClick={handleClearCountry} />
                <SearchSelection searchSelection={city} handleClick={handleClearCity} />
                <SearchSelection searchSelection={company} handleClick={handleClearCompany} />
            </div>
        </div>
    );
};

const mapStateToProps = ({ search, helpers }) => ({
    city: search.city,
    country: search.country,
    company: search.company,
    q: search.q,
    isSearchBadDisplayed: helpers.isSearchBadDisplayed
})

const mapDispatchToProps = (dispatch) => ({
    setQuery: (e) => dispatch(setQuery(e)),
    clearQuery: () => dispatch(clearQuery()),
    clearCountry: () => dispatch(clearCountry()),
    clearCity: () => dispatch(clearCity()),
    clearCompany: () => dispatch(clearCompany()),
    setIsLoading: (bool) => dispatch(setIsLoading(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
