import { createAction } from 'redux-actions';
import { signIn, signOut } from "../../services/auth";
import { SET_USER_DATA, SET_PROMPT_OPEN } from "./constants";
import { fetchTodos } from '../todos/actions';
import { fetchCategories } from '../categories/actions';
import { isAuthenticated, isAuthenticationPromptOpen } from './selectors';

const setUserDataAction = createAction(SET_USER_DATA);
const setPromptOpenAction = createAction(SET_PROMPT_OPEN)

export const initialiseAuthentication = () => (dispatch, getState) => {
    if (isAuthenticated(getState())) {
        return;
    }

    dispatch(setPromptOpenAction(true));
};

export const closeAuthenticationPrompt = () => (dispatch, getState) => {
    if (!isAuthenticationPromptOpen(getState())) {
        return;
    }

    dispatch(setPromptOpenAction(false));
};

export const authenticateGoogle = () => (dispatch, getState) => {
    dispatch(closeAuthenticationPrompt());

    if (isAuthenticated(getState())) {
        return;
    }

    signIn()
        .then(({ name, email, photo, uid }) => {
            dispatch(setUserDataAction({
                name, email, photo, uid
            }));
            dispatch(fetchCategories());
            dispatch(fetchTodos());
        })
        .catch(() => {});
};
  
export const removeAuthentication = () => (dispatch) => {
    signOut()
        .then(() => {
            dispatch(setUserDataAction(null));
        })
        .catch(() => {});
};