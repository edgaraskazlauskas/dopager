import { handleActions } from 'redux-actions';
import { ADD_CATEGORY } from './constants';

export default handleActions({
    [ADD_CATEGORY]: (state, action) => ({
        ...state,
        ids: state.ids.concat(action.payload.name)
    })
}, {
    ids: []
});
