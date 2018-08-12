import { createAction } from 'redux-actions';
import { ADD_CATEGORY } from './constants';
import { getCategoryNames } from './selectors';
import { push } from 'connected-react-router';

const createCategoryAction = createAction(ADD_CATEGORY);

export const createCategory = (name) => (dispatch, getState) => {
    const categories = getCategoryNames(getState());

    if (categories.indexOf(name) !== -1) {
        return;
    }

    dispatch(createCategoryAction({ name }));
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
