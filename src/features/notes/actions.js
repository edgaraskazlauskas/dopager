import uuid from 'uuid/v1';
import { createAction } from 'redux-actions';
import { CREATE_NOTE, REMOVE_NOTE, INITIALISE_NOTES, FETCH_NOTES } from './constants';
import { push } from 'connected-react-router';
import { getTodoById, getActiveTodoId } from '../todos/selectors';

const createNoteAction = createAction(CREATE_NOTE);
const removeNoteAction = createAction(REMOVE_NOTE);

export const fetchNotes = createAction(FETCH_NOTES);
export const initialiseNotes = createAction(INITIALISE_NOTES);

export const createNote = ({ title, description }, todoId) => (dispatch) => {
    dispatch(createNoteAction({
        id: uuid(),
        title,
        description,
        todoId
    }));
};

export const createActiveTodoNote = (note) => (dispatch, getState) => {
    const state = getState();
    const activeTodo = getTodoById(state, getActiveTodoId(state));

    dispatch(createNote(
        {
            title: activeTodo.description,
            description: note
        },
        activeTodo.id
    ));
}

export const deleteCategory = (id) => (dispatch) => {
    dispatch(removeNoteAction({
        id
    }));
};

export const openTodoNotes = (todoId) => (dispatch) => {
    const { pathname, search } = window.location;
    const currentLocation = pathname.concat(search);
    
    dispatch(push(currentLocation, {
        isNoteSidebarOpen: true,
        todoId
    }));
};

export const closeTodoNotes = () => (dispatch) => {
    const { pathname, search } = window.location;
    const currentLocation = pathname.concat(search);
    
    dispatch(push(currentLocation, {
        isNoteSidebarOpen: false,
        todoId: null
    }));
};
