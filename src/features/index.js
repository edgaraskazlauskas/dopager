import { combineReducers } from 'redux';
import todos from './todos';
import pager from './pager';

export default combineReducers({
    todos,
    pager
});
