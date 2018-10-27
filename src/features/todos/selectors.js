import isSameDay from 'date-fns/is_same_day';
import isBefore from 'date-fns/is_before';
import { getSelectedDate, getCurrentDayDate, getIsDailyView } from './../pager';
import { ROUTE_TODOS } from './constants';

export const getTodos = (state) => (state.todos.ids || []).map((id) => state.todos.byId[id]);

export const getTodoById = (state, id) => {
    return state.todos.byId[id]
};

export const getDueTodos = (state, { categoryId = null }) => {
    const currentDate = getCurrentDayDate();

    return getTodos(state).filter(
        (todo) => {
            const isSelectedCategory = !categoryId || todo.categoryId === categoryId;

            return isSelectedCategory && isBefore(todo.date, currentDate) && !todo.completed
        }
    );
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
