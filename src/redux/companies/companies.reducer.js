import { companiesTypes } from './companies.types';

const companiesReducer = (state = null, action) => {
    switch (action.type) {
        case companiesTypes.GET_COMPANIES:
            return action.payload;
        default:
            return state;
    }
}

export default companiesReducer;