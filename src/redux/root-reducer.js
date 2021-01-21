import { combineReducers } from 'redux';

import jobs from './jobs/jobs.reducer';
import companies from './companies/companies.reducer';
import helpers from './helpers/helpers.reducer';
import total from './total/total.reducer';

export default combineReducers({
    jobs,
    companies,
    helpers,
    total
});


