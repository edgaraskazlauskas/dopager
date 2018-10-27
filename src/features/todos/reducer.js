import { handleActions } from 'redux-actions';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO, INITIALISE_TODOS } from './constants';
import { initialiseNormalised, addWithId, updateById, removeById, defaultNormalisedObjectsState } from '../../utils/redux';

const todosReducer = handleActions({
    [INITIALISE_TODOS]: initialiseNormalised,
    [ADD_TODO]: addWithId,
    [UPDATE_TODO]: updateById,
    [DELETE_TODO]: removeById
}, defaultNormalisedObjectsState);
  
export default todosReducer;