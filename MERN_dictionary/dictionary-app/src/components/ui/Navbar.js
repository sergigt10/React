import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    // Extraemos info del store gracias a redux
    const { name } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    
    return (
        
        <div className="navbar navbar-dark bg-dark mb-4">

            <span className="navbar-brand">
                { name }
            </span>

            <NavLink 
                className="nav-item nav-link" 
                exact
                to="/search"
            >
                Search
            </NavLink>

            <button 
                className="btn btn-outline-danger"
                onClick={ handleLogout }
            >
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>
        </div>
    )
}
