import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { translationStartAddNew } from '../../actions/translations';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

const initTranslation = {
    wordEsp: '',
    wordIta: ''
}

export const DictionaryModal = () => {

    const { modalOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const [ wordEspValid, setWordEspValid ] = useState(true);
    const [ wordItaValid, setWordItaValid ] = useState(true);

    const [formValues, setFormValues] = useState( initTranslation );

    const { wordEsp, wordIta } = formValues;

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const closeModal = () => {
        dispatch( uiCloseModal() );
        setFormValues( initTranslation );
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if ( wordEsp.trim().length < 2 ) {
            return setWordEspValid(false);
        }

        if ( wordIta.trim().length < 2 ) {
            return setWordItaValid(false);
        }

        dispatch( translationStartAddNew(formValues) );

        setWordEspValid(true);
        setWordItaValid(true);
        closeModal();

    }

    return (
        <Modal
            isOpen={ modalOpen }
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
        >

            <h1> Nueva traducción </h1>
            <hr />
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >

                <div className="form-group">
                    <label>Palabra ESP</label>
                    <input
                        type="text" 
                        className={`form-control ${ !wordEspValid && 'is-invalid' }`} 
                        placeholder="ESP"
                        name="wordEsp"
                        autoComplete="off"
                        value={ wordEsp }
                        onChange={ handleInputChange } 
                    />
                </div>

                <div className="form-group">
                    <label>Palabra ITA</label>
                    <input
                        type="text"  
                        className={`form-control ${ !wordItaValid && 'is-invalid' }`}
                        placeholder="ITA"
                        name="wordIta" 
                        autoComplete="off"
                        value={ wordIta }
                        onChange={ handleInputChange }
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>
    )
}
