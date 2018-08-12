import { combineReducers } from 'redux';
import todos from './todos/reducer';
import categories from './categories/reducer';
import pager from './pager';
import { push } from 'connected-react-router';

export const initialiseApp = () => (dispatch, getState) => {
    dispatch(push(window.location.pathname, {
        categoryId: window.location.pathname.split('/').pop()
    }))
};

export default combineReducers({
    todos,
    pager,
    categories
});
