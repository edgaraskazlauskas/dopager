export const getCategoryNames = (state) => state.categories.ids;

export const getCategoryName = (state, id) => id;

export const getCategoryItems = (state, id) => state.todos.filter((todo) => todo.categoryId === id);