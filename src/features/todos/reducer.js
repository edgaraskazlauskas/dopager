import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, MOVE_TODO, TOGGLE_TODO_IN_PROGRESS } from './constants';

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ];
        case TOGGLE_TODO:
            return state.map(
                (todo) => todo.id === action.payload.id
                    ? { ...todo, completed: action.payload.completed }
                    : todo
            );
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload.id);
        case MOVE_TODO:
            return state.map(
                (todo) => todo.id === action.payload.id
                    ? { ...todo, date: action.payload.date }
                    : todo
            );
        case TOGGLE_TODO_IN_PROGRESS:
            return state.map(
                (todo) => todo.id === action.payload.id
                    ? { ...todo, inProgress: !todo.inProgress }
                    : todo
            );
        default:
            return state
    }
};
  
export default todosReducer;