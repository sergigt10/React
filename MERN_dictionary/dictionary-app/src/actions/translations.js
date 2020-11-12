import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
import Swal from 'sweetalert2';

export const translationStartAddNew = ( translation ) => {
    return async ( dispatch, getState ) => {

        // Accedemos al state del store con getState proporcionado por thunk
        const { uid, name } = getState().auth;

        try {
            const resp = await fetchConToken('translations', translation, 'POST');
            const body = await resp.json();

            if ( body.ok ) {
                translation.id = body.translation.id;
                translation.user = {
                    _id: uid,
                    name: name
                } 
                dispatch( translationAddNew( translation ) );
            }

        } catch (error) {
            console.log(error)
        }

    }
}

// Si se guardo correctamente en la base de datos
const translationAddNew = (translation) => ({
    type: types.translationAddNew,
    payload: translation
});

export const translationSetActive = (translation) => ({
    type: types.translationSetActive,
    payload: translation
});

export const translationStartDeleted = () => {
    return async( dispatch, getState ) => {

        const idTranslation = getState().dictionary.activeTranslation;

        try {
            const resp = await fetchConToken(`translations/${ idTranslation }`, {}, 'DELETE');
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( translationDeleted() );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const translationDeleted = () => ({
    type: types.translationDeleted
});

export const translationStartLoading = () => {
    return async ( dispatch ) => {
        
        try {

            const resp = await fetchConToken('translations');
            const body = await resp.json(); 

            const translations = body.translations;

            dispatch( translationLoaded(translations) );

        } catch (error) {
            console.log(error);
        }

    }
}

const translationLoaded = ( translations ) => ({
    type: types.translationLoaded,
    payload: translations
});

export const translationLogout = () => ({
    type: types.translationLogout
})