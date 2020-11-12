import React, { useEffect } from 'react'
import { Navbar } from '../ui/Navbar'
import { DictionaryModal } from './DictionaryModal'
import { AddNewFab } from '../ui/AddNewFab'
import { TranslationsGrid } from '../ui/TranslationsGrid'
import { useDispatch } from 'react-redux'
import { translationStartLoading } from '../../actions/translations'

export const DictionaryScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( translationStartLoading() )
    }, [dispatch]);

    return (
        <div className="dictionary-screen">
            <Navbar />       

            <DictionaryModal />
            
            <AddNewFab />

            <TranslationsGrid />
        </div>
    )
}
