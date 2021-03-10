import { searchTypes } from './search.type';

const defaultState = {
    city: null,
    country: null,
    company: null,
    q: '',
    results: null
}

const searchRedux = (state = defaultState, action) => {
    switch (action.type) {
        case searchTypes.CITY:
            return { ...state, city: action.payload }
        case searchTypes.CLEAR_CITY:
            return { ...state, city: null }
        case searchTypes.COUNTRY:
            return { ...state, country: action.payload };
        case searchTypes.CLEAR_COUNTRY:
            return { ...state, country: null };
        case searchTypes.COMPANY:
            return { ...state, company: action.payload };
        case searchTypes.CLEAR_COMPANY:
            return { ...state, company: null };
        case searchTypes.QUERY:
            return { ...state, q: action.payload };
        case searchTypes.CLEAR_QUERY:
            return { ...state, q: '' }
        default:
            return state
    }
}

export default searchRedux;