import axiosBaseUrl from '../../axios/baseUrl';
import { jobsTypes } from './jobs.types';

export const getAllJobs = () => async dispatch => {
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
    } catch (error) {
        console.error();
    }
}