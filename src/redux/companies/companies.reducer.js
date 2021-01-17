import { companiesTypes } from './companies.types';

const companiesReducer = (state = { all: null, total: null }, action) => {
    switch (action.type) {
        case companiesTypes.GET_COMPANIES:
            return { ...state, all: action.payload };
        case companiesTypes.SELECT_COMPANY:
            return { ...state, total: action.payload };
        default:
            return state;
    }
}

export default companiesReducer;