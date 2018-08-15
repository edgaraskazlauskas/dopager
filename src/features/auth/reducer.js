import { handleActions } from 'redux-actions';
import { SET_USER_DATA, SET_PROMPT_OPEN } from './constants';
import { combineReducers } from '../../../node_modules/redux';

const userReducer = handleActions({
    [SET_USER_DATA]: (_state, action) => action.payload
}, null);

const authenticationPromptReducer = handleActions({
    [SET_PROMPT_OPEN]: (_state, action) => action.payload
}, false);

export default combineReducers({
    user: userReducer,
    isPromptOpen: authenticationPromptReducer
});
