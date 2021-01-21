import { totalTypes } from './total.types';

const totalRedux = (state = null, action) => {
    switch (action.type) {
        case totalTypes.TOTAL:
            return action.payload;
        default:
            return state
    }
}

export default totalRedux;