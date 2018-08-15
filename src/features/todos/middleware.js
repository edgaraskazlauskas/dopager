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

                store.dispatch(initialiseTodos({
                    ids,
                    byId
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
