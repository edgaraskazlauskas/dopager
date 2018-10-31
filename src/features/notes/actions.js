import uuid from 'uuid/v1';
import { createAction } from 'redux-actions';
import { CREATE_NOTE, REMOVE_NOTE } from './constants';
import { push } from 'connected-react-router';

const createNoteAction = createAction(CREATE_NOTE);
const removeNoteAction = createAction(REMOVE_NOTE);

export const createNote = (title, description, todoId) => (dispatch) => {
    dispatch(createNoteAction({
        id: uuid(),
        title,
        description,
        todoId
    }));
};

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
