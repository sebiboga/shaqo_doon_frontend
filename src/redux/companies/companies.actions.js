import { companiesTypes } from './companies.types';
import axiosBaseUrl from '../../axios/baseUrl';

export const getAllCompanies = () => async dispatch => {
    try {
        const response = await axiosBaseUrl({
            method: 'GET',
            url: '/companies/',
        })
        dispatch({
            type: companiesTypes.GET_COMPANIES,
            payload: response.data.companies
        })
    } catch (error) {

    }
}

export const selectCompany = (company) => dispatch => {
    dispatch({
        type: companiesTypes.SELECT_COMPANY,
        payload: company
    });
}