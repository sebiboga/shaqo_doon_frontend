import { helpersType } from './helpers.types';

export const setIsLoading = (bool) => dispatch => {
    dispatch({
        type: helpersType.IS_LOADING,
        payload: bool
    })
}

export const setDisplaySearchBar = (bool) => dispatch => {
    dispatch({
        type: helpersType.IS_SEARCH_BAR_DISPLAYED,
        payload: bool
    })
}