import React from 'react'
import { useDispatch } from 'react-redux'
import { translationSetActive, translationStartDeleted } from '../../actions/translations';

export const DeleteEventFab = ({idTranslation}) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch( translationSetActive(idTranslation) );
        dispatch( translationStartDeleted() );
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDelete }
        >
            <i className="fas fa-trash"></i>
        </button>
    )
}
