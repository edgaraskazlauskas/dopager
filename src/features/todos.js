import { createAction } from 'redux-action';
import uuid from 'uuid/v1';
import isSameDay from 'date-fns/is_same_day';
import { getSelectedDate, getIsDailyView } from './pager';
import addDays from 'date-fns/add_days';

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const MOVE_TODO = 'todos/MOVE_TODO';
const TOGGLE_TODO_IN_PROGRESS = 'todos/TOGGLE_TODO_IN_PROGRESS';

export const addTodoAction = createAction(ADD_TODO);
export const toggleTodoAction = createAction(TOGGLE_TODO);
export const deleteTodoAction = createAction(DELETE_TODO);
export const moveTodoAction = createAction(MOVE_TODO);
export const toggleTodoInProgressAction = createAction(TOGGLE_TODO_IN_PROGRESS);

export const getTodos = (state) => state.todos;
export const getTodoById = (state, id) => state.todos.find((todo) => todo.id === id);
export const getDateTodos = (state, date) => {
    const isDailyView = getIsDailyView(state);

    return state.todos.filter(
        (todo) => isSameDay(
            todo.date,
            isDailyView ? getSelectedDate(state) : date
        )
    );
};

export const toggleTodoInProgress = (id) => (dispatch) => (
    dispatch(toggleTodoInProgressAction({
        id
    }))
);

export const moveTodo = (id) => (dispatch, getState) => {
    const todo = getTodoById(getState(), id);
    const updatedDate = addDays(todo.date, 1);

    dispatch(moveTodoAction({ id, date: updatedDate }));
};

export const deleteTodo = (id) => (dispatch) => {
    dispatch(deleteTodoAction({ id }));
};

export const addTodo = (description, date) => (dispatch, getState) => {
    const id = uuid();

    dispatch(addTodoAction({
        id,
        description,
        completed: false,
        createdAt: Date.now(),
        date: date || getState().pager.activeDate,
        completedAt: null
    }));
};

export const toggleTogo = (id) => (dispatch, getState) => {
    const toggledTogo = getState().todos.find((todo) => todo.id === id);
    const completed = !toggledTogo.completed;

    dispatch(toggleTodoAction({
        id,
        completedAt: completed ? Date.now() : null,
        completed
    }));
};

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