import { handleActions } from 'redux-actions';
import { ADD_CATEGORY, INITIALISE_CATEGORIES, DELETE_CATEGORY } from './constants';

const defaultState = {
    ids: []
};

export default handleActions({
    [INITIALISE_CATEGORIES]: (state, action) => ({
        ...state,
        ids: action.payload.ids,
    }),
    [ADD_CATEGORY]: (state, action) => ({
        ...state,
        ids: [
            ...state.ids,
            action.payload.name
        ]
    }),
    [DELETE_CATEGORY]: (state = defaultState, action) => ({
        ids: state.ids.filter((id) => id !== action.payload.id),
    })
}, defaultState);
