import { FETCH_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./constants";
import { todosRef } from '../../config/firebase';
import { initialiseTodos } from "./actions";
import { createFirebaseResourceMiddleware } from "../firebase/firebaseResourceMiddleware";

const todosApiMiddleware = createFirebaseResourceMiddleware({
    fetchAction: FETCH_TODOS,
    addAction: ADD_TODO,
    updateAction: UPDATE_TODO,
    deleteAction: DELETE_TODO,

    initialiseActionCreator: initialiseTodos,
    resourceIdsSelector: (state) => state.todos.ids,
    resourcesByIdSelector: (state) => state.todos.byId,

    firebaseResoureRef: todosRef
});
  
export default todosApiMiddleware;
