import { getTodos } from "../todos/selectors";

export const getCategoryNames = (state) => state.categories.ids;

export const getCategoryName = (_state, id) => id;

export const getCategoryItems = (state, id, limit) => {
    const categoryItems = getTodos(state).filter((todo) => todo.categoryId === id);

    return limit ? categoryItems.filter((_item, index) => index < limit) : categoryItems;
};