import { companiesTypes } from './companies.types';

const companiesReducer = (state = { all: null }, action) => {
    switch (action.type) {
        case companiesTypes.GET_COMPANIES:
            return { ...state, all: action.payload };
        default:
            return state;
    }
}

export default companiesReducer;