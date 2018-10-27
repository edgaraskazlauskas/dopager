import uuid from 'uuid/v1';
import { createAction } from 'redux-actions';
import { ADD_CATEGORY, INITIALISE_CATEGORIES, FETCH_CATEGORIES, DELETE_CATEGORY, ROUTE_CATEGORIES } from './constants';
import { getCategoryNames } from './selectors';
import { push } from 'connected-react-router';

export const fetchCategories = createAction(FETCH_CATEGORIES);
export const initialiseCategories = createAction(INITIALISE_CATEGORIES);
const createCategoryAction = createAction(ADD_CATEGORY);
const deleteCategoryAction = createAction(DELETE_CATEGORY);

export const createCategory = (name) => (dispatch, getState) => {
    const state = getState();
    const categories = getCategoryNames(state);

    if (categories.indexOf(name) !== -1) {
        return;
    }

    dispatch(createCategoryAction({ id: uuid(), name }));
};

export const deleteCategory = (id) => (dispatch) => {
    dispatch(deleteCategoryAction({
        id
    }));
};

export const openCategoryList = () => (dispatch) => {
    dispatch(push(ROUTE_CATEGORIES, {
        categoryId: undefined
    }));
};

export const openCategory = (categoryId) => (dispatch) => {
    dispatch(push(`${ROUTE_CATEGORIES}/${categoryId}`, {
        categoryId
    }));
};
