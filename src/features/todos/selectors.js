import isSameDay from 'date-fns/is_same_day';
import isBefore from 'date-fns/is_before';
import { getSelectedDate, getCurrentDayDate, getIsDailyView } from './../pager';
import { ROUTE_TODOS } from './constants';

export const getTodoIds = (state) => state.todos.ids;

export const getTodoById = (state, id) => {
    return state.todos.byId[id]
};

export const getDueTodos = (state, { categoryId = null }) => {
    const currentDate = getCurrentDayDate();

    return getTodoIds(state).filter(
        (todoId) => {
            const todo = getTodoById(state, todoId);
            const isSelectedCategory = !categoryId || todo.categoryId === categoryId;

            return isSelectedCategory && isBefore(todo.date, currentDate) && !todo.completed
        }
    );
};

export const getDateTodos = (state, date, categoryId) => {
    const isDailyView = getIsDailyView(state);

    return state.todos.ids.filter(
        (todoId) => {
            const todo = getTodoById(state, todoId);
            const isAcceptableDate = isSameDay(
                todo.date,
                isDailyView ? getSelectedDate(state) : date
            );

            return isAcceptableDate && todo.categoryId === categoryId
        }
    );
};

export const isTodosPageOpen = (state) => state.router.location.pathname === ROUTE_TODOS;

export const getActiveTodoId = (state) => state.router.location.state ? state.router.location.state.todoId : null;
