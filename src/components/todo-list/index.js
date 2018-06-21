import { connect } from 'react-redux';
import { getSelectedDayTodos, toggleTogo, deleteTodo, moveTodo, toggleTodoInProgress, getDateTodos } from '../../features/todos';
import TodoList from './todo-list';

export default connect(
    (state, { date }) => ({
        todos: !!date ? getDateTodos(state, date) : getSelectedDayTodos(state)
    }),
    {
        onClickedToggle: toggleTogo,
        onClickedDelete: deleteTodo,
        onClickedMove: moveTodo,
        onClickedSetInProgress: toggleTodoInProgress
    }
)(TodoList);