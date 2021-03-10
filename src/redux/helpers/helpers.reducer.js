import { helpersType } from './helpers.types';

const defaultState = {
    isLoading: true,
    isSearchBadDisplayed: false,
}

const helperReducer = (state = defaultState, action) => {
    switch (action.type) {
        case helpersType.IS_LOADING:
            return { ...state, isLoading: action.payload }
        case helpersType.IS_SEARCH_BAR_DISPLAYED:
            return { ...state, isSearchBadDisplayed: action.payload }
        default:
            return state
    }
};

export default helperReducer;