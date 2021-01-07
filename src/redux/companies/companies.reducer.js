import { companiesTypes } from './companies.types';

const companiesReducer = (state = { all: null, companySelected: null }, action) => {
    switch (action.type) {
        case companiesTypes.GET_COMPANIES:
            return { ...state, all: action.payload };
        case companiesTypes.SELECT_COMPANY:
            return { ...state, companySelected: action.payload };
        default:
            return state;
    }
}

export default companiesReducer;