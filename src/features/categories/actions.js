import { createAction } from 'redux-actions';
import { ADD_CATEGORY, INITIALISE_CATEGORIES, FETCH_CATEGORIES } from './constants';
import { getCategoryNames } from './selectors';
import { push } from 'connected-react-router';
import { isAuthenticated } from '../auth/selectors';

export const fetchCategories = createAction(FETCH_CATEGORIES);
const createCategoryAction = createAction(ADD_CATEGORY);
const initialiseCategoriesAction = createAction(INITIALISE_CATEGORIES);

export const initialiseCategories = (ids) => (dispatch, getState) => {
    const state = getState();
    const filterIds = ids.filter((id) => state.categories.ids.indexOf(id) === -1);

    dispatch(initialiseCategoriesAction({
        ids: [
            ...state.categories.ids,
            ...filterIds
        ],
    }));
};

export const createCategory = (name) => (dispatch, getState) => {
    const state = getState();
    const categories = getCategoryNames(state);

    if (categories.indexOf(name) !== -1) {
        return;
    }

    dispatch(createCategoryAction({ name }));

    if (!isAuthenticated(state)) {
        return;
    }

};

export const openCategoryList = () => (dispatch) => {
    dispatch(push('/categories', {
        categoryId: undefined
    }));
};

export const openCategory = (categoryId) => (dispatch) => {
    dispatch(push(`/categories/${categoryId}`, {
        categoryId
    }));
};
