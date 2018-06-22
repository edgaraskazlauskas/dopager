import { connect } from 'react-redux';
import { toggleTogo, deleteTodo, moveTodo, toggleTodoInProgress, getDateTodos } from '../../features/todos';
import TodoList from './todo-list';

export default connect(
    (state, { date }) => ({
        todos: getDateTodos(state, date)
    }),
    {
        onClickedToggle: toggleTogo,
        onClickedDelete: deleteTodo,
        onClickedMove: moveTodo,
        onClickedSetInProgress: toggleTodoInProgress
    }
)(TodoList);