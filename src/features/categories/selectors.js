import { getTodoIds, getTodoById } from "../todos/selectors";
import { ROUTE_CATEGORIES } from "./constants";

export const getCategoryNames = (state) => state.categories.ids.map((id) => state.categories.byId[id].name);

export const getCategoryName = (state, { id }) => state.categories.byId[id].name;

export const getCategoryItems = (state, { id, limit = null }) => {
    const categoryItems = getTodoIds(state).filter((todoId) => {
        const todo = getTodoById(state, todoId);

        return todo.categoryId === id;
    });

    return limit
        ? categoryItems.filter((_item, index) => index < limit)
        : categoryItems;
};

export const isCategoryPageOpen = (state) => state.router.location.pathname === ROUTE_CATEGORIES;