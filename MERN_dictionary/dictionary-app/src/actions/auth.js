import { fetchSinToken, fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";
import swal from 'sweetalert2';
import { translationLogout } from "./translations";

// Empezar el proceso de login
export const startLogin = (email, password) => {
    // Tarea asincrona gracias a thunk de redux
    return async( dispatch ) => {
        const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
        const body = await resp.json();

        // Si todo sale bien
        if ( body.ok ){
            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );

            // Establece el uid y el nombre de usuario
            dispatch( login ({
                uid: body.uid,
                name: body.name
            }) );

        } else {
            swal.fire('Error', body.msg, 'error');
        }
    }
}

// Comprueba el token
export const startChecking = () => {
    return async( dispatch ) => {
        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();

        // Si todo sale bien
        if ( body.ok ){
            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );

            // Establece el uid y el nombre de usuario
            dispatch( login ({
                uid: body.uid,
                name: body.name
            }) );

        } else {
            dispatch( checkingFinish() );
        }
    }   
}

// Ponemos el checking en false
const checkingFinish = () => ({
    type: types.authCheckingFinish
})

// Completa el login
const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})

// Proceso sincrono
export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(translationLogout());
        dispatch(logout());
    }
}

const logout = () => ({ type: types.authLogout })