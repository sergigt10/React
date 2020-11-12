import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen';
import { DictionaryScreen } from '../components/dictionary/DictionaryScreen';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DictionarySearch } from '../components/dictionary/DictionarySearch';

export const AppRouter = () => {

    const dispatch = useDispatch();
    // Extraemos info del store gracias a redux
    const { checking , uid } = useSelector(state => state.auth);

    // Cada vez que accedemos a cualquier archivo
    useEffect(() => {
        dispatch( startChecking() )
    }, [dispatch]);

    // Si el checking no esta en false
    if ( checking ) {
        return (<h5>Espere....</h5>);
    }

    // Convertir un string en boleano añadiendo !!
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen } 
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ DictionaryScreen }
                        isAuthenticated={ !!uid } 
                    />

                    <PrivateRoute 
                        exact 
                        path="/search" 
                        component={ DictionarySearch }
                        isAuthenticated={ !!uid } 
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
