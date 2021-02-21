import axiosBaseUrl from '../../axios/baseUrl';
import axios from 'axios';
import { jobsTypes } from './jobs.types';

export const getAllJobs = (jobsLoaded) => async dispatch => {
    try {
        const response = await axiosBaseUrl({
            method: 'GET',
            url: '/jobs/',
        })

        // console.log(response.data.jobs)
        dispatch({
            type: jobsTypes.GET_ALL,
            payload: response.data.jobs
        })

        // tell to Jobs.component when jobs are soladed so it can display the jobs
        jobsLoaded();
    } catch (error) {
        console.log(error);
    }
}

export const clearJobs = () => async dispatch => {
    dispatch({
        type: jobsTypes.CLEAR_JOBS,
    })
}

export const getJobsCompany = ({ api, cb }) => async dispatch => {
    // console.log('api', api)
    try {
        const response = await axios.get(api)

        dispatch({
            type: jobsTypes.GET_JOBS_COMPANY,
            payload: response.data.jobs
        })

        // tell fron end when it is finish an can display the results
        cb();
    } catch (error) {
        console.log(error)
    }
}