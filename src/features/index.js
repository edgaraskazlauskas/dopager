import { combineReducers } from 'redux';
import todos from './todos/reducer';
import categories from './categories/reducer';
import pager from './pager';
import auth from './auth/reducer';
import { push } from 'connected-react-router';
import { fetchTodos } from './todos/actions';
import { initialiseAuthentication } from './auth/actions';
import { fetchCategories } from './categories/actions';

export const initialiseApp = () => (dispatch) => {
    dispatch(push(window.location.pathname, {
        categoryId: window.location.pathname.split('/').pop()
    }));

    dispatch(initialiseAuthentication());
    dispatch(fetchCategories());
    dispatch(fetchTodos());
};

export default combineReducers({
    auth,
    todos,
    pager,
    categories
});
