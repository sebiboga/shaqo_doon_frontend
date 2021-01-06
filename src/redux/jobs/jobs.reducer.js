import { jobsTypes } from './jobs.types';

const jobsReducer = (state = null, action) => {
    switch (action.type) {
        case jobsTypes.GET_ALL:
            return action.payload;
        default:
            return state;
    }
}

export default jobsReducer;