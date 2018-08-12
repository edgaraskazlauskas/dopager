import { createAction } from 'redux-actions';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, MOVE_TODO, TOGGLE_TODO_IN_PROGRESS } from './constants';
import uuid from 'uuid/v1';
import addDays from 'date-fns/add_days';
import { getTodoById } from './selectors';

// action creators
const addTodoAction = createAction(ADD_TODO);
const toggleTodoAction = createAction(TOGGLE_TODO);
const deleteTodoAction = createAction(DELETE_TODO);
const moveTodoAction = createAction(MOVE_TODO);
const toggleTodoInProgressAction = createAction(TOGGLE_TODO_IN_PROGRESS);

// thunks
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
        categoryId: getState().router.location.state.categoryId,
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
