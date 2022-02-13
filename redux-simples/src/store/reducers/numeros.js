import { NUM_MIM_ALTERADO, NUM_MAX_ALTERADO } from '../constantes';

const initialState = {
    min: 1,
    max: 10
}

export default function (state = initialState, action) {
    if (action.type === NUM_MIM_ALTERADO) {
        return {
            ...state,
            min: action.payload
        }
    } else if (action.type === NUM_MAX_ALTERADO) {
        return {
            ...state,
            max: action.payload
        }
    } else {
        return initialState;
    }
}