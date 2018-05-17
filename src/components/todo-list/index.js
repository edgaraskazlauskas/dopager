import { connect } from 'react-redux';
import { getSelectedDayTodos, toggleTogo, deleteTodo, moveTodo, toggleTodoInProgress } from '../../features/todos';
import TodoList from './todo-list';

export default connect(
    (state) => ({
        todos: getSelectedDayTodos(state)
    }),
    {
        onClickedToggle: toggleTogo,
        onClickedDelete: deleteTodo,
        onClickedMove: moveTodo,
        onClickedSetInProgress: toggleTodoInProgress
    }
)(TodoList);