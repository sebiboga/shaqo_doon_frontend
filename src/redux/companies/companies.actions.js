import { companiesTypes } from './companies.types';
import axiosBaseUrl from '../../axios/baseUrl';

export const getAllCompanies = () => async dispatch => {
    try {
        const response = await axiosBaseUrl({
            method: 'GET',
            url: '/companies/',
        })
        console.log(response.data.companies);
        dispatch({
            type: companiesTypes.GET_COMPANIES,
            payload: response.data.companies
        })
    } catch (error) {

    }
}