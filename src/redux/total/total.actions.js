import { totalTypes } from './total.types';
import axiosBaseUrl from '../../axios/baseUrl';

export const getTotal = () => async dispatch => {
    try {
        const response = await axiosBaseUrl({
            method: 'GET',
            url: '/total/',
        })

        dispatch({
            type: totalTypes.TOTAL,
            payload: response.data.total
        })
    } catch (error) {
        console.log('something went wrong')
    }

}