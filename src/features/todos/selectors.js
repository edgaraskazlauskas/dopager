import isSameDay from 'date-fns/is_same_day';
import { getSelectedDate, getIsDailyView } from './../pager';
import { ROUTE_TODOS } from './constants';

export const getTodos = (state) => (state.todos.ids || []).map((id) => state.todos.byId[id]);
export const getTodoById = (state, id) => {
    return state.todos.byId[id]
};
export const getDateTodos = (state, date, categoryId) => {
    const isDailyView = getIsDailyView(state);

    return getTodos(state).filter(
        (todo) => {
            const isAcceptableDate = isSameDay(
                todo.date,
                isDailyView ? getSelectedDate(state) : date
            );

            return isAcceptableDate && todo.categoryId === categoryId
        }
    );
};
export const isTodosPageOpen = (state) => state.router.location.pathname === ROUTE_TODOS;
