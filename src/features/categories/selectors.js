import { getTodos } from "../todos/selectors";
import { ROUTE_CATEGORIES } from "./constants";

export const getCategoryNames = (state) => state.categories.ids;

export const getCategoryName = (_state, id) => id;

export const getCategoryItems = (state, id, limit) => {
    const categoryItems = getTodos(state).filter((todo) => todo.categoryId === id);

    return limit ? categoryItems.filter((_item, index) => index < limit) : categoryItems;
};

export const isCategoryPageOpen = (state) => state.router.location.pathname === ROUTE_CATEGORIES;