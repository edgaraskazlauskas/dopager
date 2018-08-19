import { handleActions } from 'redux-actions';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO, INITIALISE_TODOS } from './constants';

const defaultState = {
    ids: [],
    byId: {}
};

const todosReducer = handleActions({
    [INITIALISE_TODOS]: (_state = defaultState, action) => {
        const { ids, byId } = action.payload;

        return {
            ids,
            byId
        };
    },
    [ADD_TODO]: (state = defaultState, action) => {
        const { id } = action.payload;

        return {
            ids: [
                ...state.ids,
                id
            ],
            byId: {
                ...state.byId,
                [id]: action.payload
            }
        };
    },
    [UPDATE_TODO]: (state = defaultState, action) => {
        const { id } = action.payload;

        return {
            ...state,
            byId: {
                ...state.byId,
                [id]: {
                    ...state.byId[id],
                    ...action.payload
                }
            }
        }
    },
    [DELETE_TODO]: (state = defaultState, action) => {
        const { [action.payload.id]: _omit, ...rest } = state.byId;
        
        return {
            ids: state.ids.filter((id) => id !== action.payload.id),
            byId: rest 
        }
    }
}, defaultState);
  
export default todosReducer;