import { FETCH_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./constants";
import { todosRef } from '../../config/firebase';
import { isAuthenticated } from "../auth/selectors";
import { initialiseTodos } from "./actions";

const todosApiMiddleware = (store) => (next) => (action) => {
    const state = store.getState();

    if (!isAuthenticated(state)) {
        return next(action);
    }

    switch(action.type) {
        case FETCH_TODOS:
            todosRef.child(state.auth.user.uid).once("value", (snapshot) => {
                const storedTodos = snapshot.val();
        
                if (!storedTodos) {
                    return;
                }
        
                const { ids, byId } = Object.keys(storedTodos)
                    .reduce((prev, curr) => ({
                        ids: [
                            ...prev.ids,
                            curr
                        ],
                        byId: {
                            ...prev.byId,
                            [curr]: storedTodos[curr]
                        }
                    }), { ids: [], byId: {} });

                // filter todos that have already been stored locally
                const filteredFirebaseIds = ids.filter((id) => state.todos.ids.indexOf(id) === -1);
                const filteredFirebaseById = filteredFirebaseIds.reduce((previousById, currentId) => ({
                    ...previousById,
                    [currentId]: byId[currentId]
                }), {});

                // get recently created todos
                const newTodoIds = state.todos.ids.filter((id) => ids.indexOf(id) === -1);
                const newTodosById = newTodoIds.reduce((previousById, currentId) => ({
                    ...previousById,
                    [currentId]: state.todos.byId[currentId]
                }), {});

                newTodoIds.forEach((item) => {
                    todosRef
                        .child(state.auth.user.uid)
                        .child(item)
                        .set(newTodosById[item]);
                });

                const allIds = [ ...state.todos.ids, ...filteredFirebaseIds ];
                const allById = { ...state.todos.byId, ...filteredFirebaseById };

                store.dispatch(initialiseTodos({
                    ids: allIds,
                    byId: allById
                }));
            });

            break;
        case ADD_TODO:
            todosRef
                .child(state.auth.user.uid)
                .child(action.payload.id)
                .set(action.payload);

            break;
        case DELETE_TODO:
            todosRef
                .child(state.auth.user.uid)
                .child(action.payload.id)
                .remove();

            break;
        case UPDATE_TODO:
            todosRef
                .child(state.auth.user.uid)
                .child(action.payload.id)
                .update(action.payload);

            break;
        default:
            break;
    }

    return next(action);
}
  
export default todosApiMiddleware;
