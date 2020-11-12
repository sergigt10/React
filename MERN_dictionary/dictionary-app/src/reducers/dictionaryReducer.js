import { types } from "../types/types";

// const initialState = {
//     translations: [{
//         wordEsp: 'Chico',
//         wordIta: 'Ragazzo',
//         user: {
//             _id: '123',
//             name: 'Fernando'
//         }
//     }]
// }

const initialState = {
    translations: [],
    activeTranslation: null
}

export const dictionaryReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case types.translationSetActive:
            return {
                ...state,
                activeTranslation: action.payload
            }
        case types.translationAddNew:
            return {
                ...state,
                translations: [
                    ...state.translations,
                    action.payload
                ]
            }
        case types.translationDeleted:
            return{
                ...state,
                translations: state.translations.filter(
                    e => ( e.id !== state.activeTranslation )
                ),
                activeTranslation: null
            }
        case types.translationLoaded:
            return {
                ...state,
                translations: [
                    ...action.payload
                ]
            }
        case types.translationLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }
}