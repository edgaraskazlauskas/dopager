import { connect } from 'react-redux';
import { getTodos } from '../../features/todos';
import TodoList from './todo-list';

export default connect(
    (state) => ({
        todos: getTodos(state)
    })
)(TodoList);