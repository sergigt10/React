import React, { useEffect, useMemo } from 'react';
import queryString from 'query-string';
import { TranslationsGridItem } from '../ui/TranslationsGridItem';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getTranslationsByName } from '../selectors/getTranslationsByName';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../ui/Navbar';
import { translationStartLoading } from '../../actions/translations';

export const DictionarySearch = ({ history }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( translationStartLoading() )
    }, [dispatch]);

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;

    const { translations } = useSelector( state => state.dictionary );
    
    // Se usa useMemo para buscar solo cuándo se modifica el query string, en este caso el valor de q .
    const translationFiltered = useMemo(() => getTranslationsByName( q, translations ), [q, translations])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    const handleReturn = () => {
        history.push('/');
    }

    return (
        <div className="dictionary-screen">
            <Navbar />

            <div className="container">
            
                <div className="row">

                    <div className="col-5">
                        <h4> Search Form </h4>
                        <hr />

                        <form onSubmit={ handleSearch }>
                            <input 
                                type="text"
                                placeholder="Buscar traducción"
                                className="m-1 form-control"
                                name="searchText"
                                autoComplete="off"
                                value={ searchText }
                                onChange={ handleInputChange }
                            />

                            <button
                                type="submit"
                                className="btn m-1 btn-block btn-outline-primary"
                            >
                                Search...
                            </button>
                        </form>

                        <button 
                            className="btn m-1 btn-outline-info"
                            onClick={ handleReturn }
                        >
                            Return
                        </button>
                        
                    </div>


                    <div className="col-7">

                        <h4> Results </h4>
                        <hr />

                        { 
                            (q ==='') 
                                && 
                                <div className="alert alert-info">
                                    Buscar una traducción
                                </div>
                        }

                        { 
                            (q !=='' && translationFiltered.length === 0 ) 
                                && 
                                <div className="alert alert-danger">
                                    No hay traducciones con este nombre { q }
                                </div>
                        }

                        <div className="container">
                            <div className="row">
                                <div className="table-responsive text-center">
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">ESP - ITA</th>
                                                <th scope="col">X</th>
                                            </tr>
                                        </thead>
                                            {
                                                translationFiltered.map( translation => (
                                                    <TranslationsGridItem 
                                                        key={ translation.id }
                                                        { ...translation }
                                                    />
                                                ))
                                            }
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
