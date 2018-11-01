import { handleActions } from 'redux-actions';
import { CREATE_NOTE, INITIALISE_NOTES, REMOVE_NOTE, SET_NOTE_INPUT } from './constants';
import { removeById, addWithId, initialiseNormalised, defaultNormalisedObjectsState } from '../../utils/redux';
import { combineReducers } from 'redux';

const notesReducer = handleActions(
    {
        [INITIALISE_NOTES]: initialiseNormalised,
        [CREATE_NOTE]: addWithId,
        [REMOVE_NOTE]: removeById
    },
    defaultNormalisedObjectsState
);

const INITIAL_INPUT_VALUE = '';

const noteInputReducer = handleActions(
    {
        [SET_NOTE_INPUT]: (_state, action) => action.payload
    },
    INITIAL_INPUT_VALUE
);

export default combineReducers({
    notes: notesReducer,
    noteInput: noteInputReducer
});
