import { types } from "../types/types";

const initialState = {
    checking: true,
    // uid: null,
    // name: null
}

export const authReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.authLogin:
            // action.payload -> añadimos al state: el uid y el name
            // ...action.payload -> para machacar la info. actual.
            return {
                ...state,
                ...action.payload,
                checking: false
            }
        case types.authCheckingFinish:
            return{
                ...state,
                checking: false
            }
        // Borra el uid y el name
        case types.authLogout:
            return{
                checking: false
            }
        default:
            return state;
    }
}