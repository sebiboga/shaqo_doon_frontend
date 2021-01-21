import { helpersType } from './helpers.types';

const defaultState = {
    isLoading: true
}

const helperReducer = (state = defaultState, action) => {
    switch (action.type) {
        case helpersType.IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
};

export default helperReducer;