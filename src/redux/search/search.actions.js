import { searchTypes } from './search.type';

export const setCity = (city) => dispatch => {
    dispatch({
        type: searchTypes.CITY,
        payload: city
    })
}

export const clearCity = () => dispatch => {
    dispatch({
        type: searchTypes.CLEAR_CITY
    })
};

export const setCountry = (country) => dispatch => {
    dispatch({
        type: searchTypes.COUNTRY,
        payload: country
    })
};

export const clearCountry = () => dispatch => {
    dispatch({
        type: searchTypes.CLEAR_COUNTRY,
    })
};

export const setCompany = (company) => dispatch => {
    dispatch({
        type: searchTypes.COMPANY,
        payload: company
    })
};

export const clearCompany = () => dispatch => {
    dispatch({
        type: searchTypes.CLEAR_COMPANY,
    })
};

export const setQuery = (query) => dispatch => {
    dispatch({
        type: searchTypes.QUERY,
        payload: query
    })
};

export const clearQuery = () => dispatch => {
    dispatch({
        type: searchTypes.CLEAR_QUERY,
    })
};