import { createAction } from 'redux-action';
import uuid from 'uuid/v1';

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

export const addTodoAction = createAction(ADD_TODO);
export const toggleTodoAction = createAction(TOGGLE_TODO);

export const getTodos = (state) => state.todos;

export const addTodo = (description) => (dispatch, getState) => {
    const id = uuid();

    dispatch(addTodoAction({
        id,
        description,
        completed: false,
        createdAt: Date.now(),
        completedAt: null
    }))
};

export const toggleTogo = (id) => (dispatch, getState) => {
    const toggledTogo = getState().todos.find((todo) => todo.id === id);
    const completed = !toggledTogo.completed;

    dispatch(toggleTodoAction({
        id,
        completedAt: completed ? Date.now() : null,
        completed
    }))
};

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ];
        case TOGGLE_TODO:
            const { id, completed } = action.payload;

            return state.map(
                (todo) => todo.id === id
                    ? { ...todo, completed }
                    : todo
            );
        default:
            return state
    }
  }
  
  export default todosReducer;