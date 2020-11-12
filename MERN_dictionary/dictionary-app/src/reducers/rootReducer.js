import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { dictionaryReducer } from './dictionaryReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    dictionary: dictionaryReducer,
    auth: authReducer
})