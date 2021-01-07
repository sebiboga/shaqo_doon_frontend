import { jobsTypes } from './jobs.types';

const jobsReducer = (state = { all: null, total: null }, action) => {
    switch (action.type) {
        case jobsTypes.GET_ALL:
            return { ...state, all: action.payload };
        default:
            return state;
    }
}

export default jobsReducer;