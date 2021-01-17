import { jobsTypes } from './jobs.types';

const jobsReducer = (state = { all: null, total: null, jobsCompany: null }, action) => {
    switch (action.type) {
        case jobsTypes.GET_ALL:
            return { ...state, all: action.payload };
        case jobsTypes.GET_JOBS_COMPANY:
            return { ...state, jobsCompany: action.payload }
        default:
            return state;
    }
}

export default jobsReducer;