import { createAction } from 'redux-actions';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO, INITIALISE_TODOS, FETCH_TODOS, ROUTE_TODOS } from './constants';
import uuid from 'uuid/v1';
import addDays from 'date-fns/add_days';
import getTime from 'date-fns/get_time';
import { getTodoById, getTodos } from './selectors';
import { getIsDailyView } from '../pager';
import { push } from 'connected-react-router';

// action creators
export const fetchTodos = createAction(FETCH_TODOS);
const initialiseTodosAction = createAction(INITIALISE_TODOS);
const deleteTodoAction = createAction(DELETE_TODO);
const addTodoAction = createAction(ADD_TODO);
const updateTodoAction = createAction(UPDATE_TODO);

// thunks
export const deleteTodo = (id) => (dispatch) => {
    dispatch(deleteTodoAction({ id }));
};

export const initialiseTodos = ({ ids = [], byId = {} }) => (dispatch, getState) => {
    const state = getState();
    const filterIds = ids.filter((id) => state.todos.ids.indexOf(id) === -1);
    const filteredById = filterIds.reduce((previousById, currentId) => {
        return {
            ...previousById,
            [currentId]: byId[currentId]
        }
    }, {});

    dispatch(initialiseTodosAction({
        ids: [
            ...state.todos.ids,
            ...filterIds
        ],
        byId: {
            ...state.todos.byId,
            ...filteredById
        }
    }));
};

export const toggleTodoInProgress = (id) => (dispatch, getState) => {
    const isTodoInProgress = getTodoById(getState(), id).inProgress;

    dispatch(updateTodoAction({
        id,
        inProgress: isTodoInProgress
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
        categoryId: state.router.location.state.categoryId,
        createdAt: Date.now(),
        date: getTime(isExtendedView ? date : state.pager.activeDate),
        completedAt: null
    };

    dispatch(addTodoAction(todoPayload));
};

export const toggleTogo = (id) => (dispatch, getState) => {
    const toggledTogo = getTodos(getState()).find((todo) => todo.id === id);
    const completed = !toggledTogo.completed;

    dispatch(updateTodoAction({
        id,
        completedAt: completed ? Date.now() : null,
        completed
    }));
};

export const openTodos = () => (dispatch) => {
    dispatch(push(ROUTE_TODOS));
}
