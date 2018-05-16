import { connect } from 'react-redux';
import { getTodos, toggleTogo, deleteTodo } from '../../features/todos';
import TodoList from './todo-list';

export default connect(
    (state) => ({
        todos: getTodos(state)
    }),
    {
        onClickedToggle: toggleTogo,
        onClickedDelete: deleteTodo
    }
)(TodoList);