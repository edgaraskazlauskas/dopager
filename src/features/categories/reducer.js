import { handleActions } from 'redux-actions';
import { ADD_CATEGORY, INITIALISE_CATEGORIES } from './constants';

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
    })
}, {
    ids: []
});
