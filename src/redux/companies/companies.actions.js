import { companiesTypes } from './companies.types';
import axiosBaseUrl from '../../axios/baseUrl';

export const getAllCompanies = (setIsCompaniesLoaded) => async dispatch => {
    try {
        const response = await axiosBaseUrl({
            method: 'GET',
            url: '/companies/',
        })
        dispatch({
            type: companiesTypes.GET_COMPANIES,
            payload: response.data.companies
        })

        // tell Jobs/company thta the companies are loaded and can move forward
        setIsCompaniesLoaded();
    } catch (error) {

    }
}

// this mifht have to be deleted (20210115)
export const selectCompany = (company) => dispatch => {
    dispatch({
        type: companiesTypes.SELECT_COMPANY,
        payload: company
    });
}