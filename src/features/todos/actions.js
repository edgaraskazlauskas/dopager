import { createAction } from 'redux-actions';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO, INITIALISE_TODOS, FETCH_TODOS, ROUTE_TODOS } from './constants';
import uuid from 'uuid/v1';
import addDays from 'date-fns/add_days';
import getTime from 'date-fns/get_time';
import { getTodoById } from './selectors';
import { getIsDailyView } from '../pager';
import { push } from 'connected-react-router';

// action creators
export const fetchTodos = createAction(FETCH_TODOS);
export const initialiseTodos = createAction(INITIALISE_TODOS);
const deleteTodoAction = createAction(DELETE_TODO);
const addTodoAction = createAction(ADD_TODO);
const updateTodoAction = createAction(UPDATE_TODO);

// thunks
export const deleteTodo = (id) => (dispatch) => {
    dispatch(deleteTodoAction({ id }));
};

export const toggleTodoInProgress = (id) => (dispatch, getState) => {
    const { inProgress } = getTodoById(getState(), id);

    dispatch(updateTodoAction({
        id,
        inProgress: !inProgress
    }));
};

export const moveTodo = (id) => (dispatch, getState) => {
    const todo = getTodoById(getState(), id);

    dispatch(updateTodoAction({
        id,
        date: addDays(todo.date, 1)
    }));
};

export const addTodo = (description, date) => (dispatch, getState) => {
    const id = uuid();
    const state = getState();
    const isExtendedView = !getIsDailyView(state);

    const todoPayload = {
        id,
        description,
        completed: false,
        inProgress: false,
        categoryId: state.router.location.state.categoryId,
        createdAt: Date.now(),
        date: getTime(isExtendedView ? date : state.pager.activeDate),
        completedAt: null
    };

    dispatch(addTodoAction(todoPayload));
};

export const toggleTogo = (id) => (dispatch, getState) => {
    const { completed, inProgress } = getTodoById(getState(), id);

    dispatch(updateTodoAction({
        id,
        inProgress: !completed ? false : inProgress,
        completedAt: !completed ? Date.now() : null,
        completed: !completed
    }));
};

export const openTodos = () => (dispatch) => {
    dispatch(push(ROUTE_TODOS));
};
