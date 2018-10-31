import { handleActions } from 'redux-actions';
import { CREATE_NOTE, INITIALISE_NOTES, REMOVE_NOTE } from './constants';
import { removeById, addWithId, initialiseNormalised, defaultNormalisedObjectsState } from '../../utils/redux';

export default handleActions(
    {
        [INITIALISE_NOTES]: initialiseNormalised,
        [CREATE_NOTE]: addWithId,
        [REMOVE_NOTE]: removeById
    },
    defaultNormalisedObjectsState
);
