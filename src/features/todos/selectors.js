import isSameDay from 'date-fns/is_same_day';
import { getSelectedDate, getIsDailyView } from './../pager';

export const getTodos = (state) => state.todos;
export const getTodoById = (state, id) => state.todos.find((todo) => todo.id === id);
export const getDateTodos = (state, date, categoryId, limit) => {
    const isDailyView = getIsDailyView(state);

    return state.todos.filter(
        (todo) => {
            const isAcceptableDate = isSameDay(
                todo.date,
                isDailyView ? getSelectedDate(state) : date
            );

            return isAcceptableDate && todo.categoryId === categoryId
        }
    );
};