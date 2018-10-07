import { ADD_CATEGORY, FETCH_CATEGORIES, DELETE_CATEGORY } from "./constants";
import { categoriesRef } from '../../config/firebase';
import { isAuthenticated } from "../auth/selectors";
import { initialiseCategories } from "./actions";

const categoriesApiMiddleware = (store) => (next) => (action) => {
    const state = store.getState();

    if (!isAuthenticated(state)) {
        return next(action);
    }

    switch(action.type) {
        case FETCH_CATEGORIES:
            categoriesRef.child(state.auth.user.uid).on("value", (snapshot) => {
                const storedCategories = snapshot.val();
        
                if (!storedCategories) {
                    return;
                }
        
                const { ids } = Object.keys(storedCategories)
                    .reduce((prev, curr) => ({
                        ids: [
                            ...prev.ids,
                            curr
                        ],
                    }), { ids: [] });
        
                const localItemsToSave = state.categories.ids.filter((id) => ids.indexOf(id) === -1);

                localItemsToSave.forEach((item) => {
                    categoriesRef
                        .child(state.auth.user.uid)
                        .child(item)
                        .set(item);
                });

                store.dispatch(initialiseCategories([ ...localItemsToSave, ...ids ]));
            });

            break;
        case ADD_CATEGORY:
            categoriesRef
                .child(state.auth.user.uid)
                .child(action.payload.name)
                .set(action.payload.name);

            break;
        case DELETE_CATEGORY:
            categoriesRef
                .child(state.auth.user.uid)
                .child(action.payload.name)
                .remove();

            break;
        default:
            break;
    }

    return next(action);
}
  
export default categoriesApiMiddleware;
