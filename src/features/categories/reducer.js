import { handleActions } from 'redux-actions';
import { ADD_CATEGORY, INITIALISE_CATEGORIES, DELETE_CATEGORY, UPDATE_CATEGORY } from './constants';
import { removeById, addWithId, initialiseNormalised, defaultNormalisedObjectsState, updateById } from '../../utils/redux';

export default handleActions(
    {
        [INITIALISE_CATEGORIES]: initialiseNormalised,
        [ADD_CATEGORY]: addWithId,
        [UPDATE_CATEGORY]: updateById,
        [DELETE_CATEGORY]: removeById
    },
    defaultNormalisedObjectsState
);
