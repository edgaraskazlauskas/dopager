import { ADD_CATEGORY, FETCH_CATEGORIES, UPDATE_CATEGORY, DELETE_CATEGORY } from "./constants";
import { categoriesRef } from '../../config/firebase';
import { initialiseCategories } from "./actions";
import { createFirebaseResourceMiddleware } from "../firebase/firebaseResourceMiddleware";

const categoriesApiMiddleware = createFirebaseResourceMiddleware({
    fetchAction: FETCH_CATEGORIES,
    addAction: ADD_CATEGORY,
    updateAction: UPDATE_CATEGORY,
    deleteAction: DELETE_CATEGORY,

    initialiseActionCreator: initialiseCategories,
    resourceIdsSelector: (state) => state.categories.ids,
    resourcesByIdSelector: (state) => state.categories.byId,

    firebaseResoureRef: categoriesRef
});
  
export default categoriesApiMiddleware;
