import { helpersType } from './helpers.types';

export const setIsLoading = (bool) => dispatch => {
    dispatch({
        type: helpersType.IS_LOADING,
        payload: bool
    })
}