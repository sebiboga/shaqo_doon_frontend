import { combineReducers } from 'redux';

import jobs from './jobs/jobs.reducer';
import companies from './companies/companies.reducer';

export default combineReducers({
    jobs,
    companies,
});


