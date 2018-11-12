import { connect } from 'react-redux';
import { toggleTogo, deleteTodo, moveTodo, toggleTodoInProgress } from '../../features/todos/actions';
import { getDateTodos } from '../../features/todos/selectors';
import TodoList from './todo-list';

export default connect(
    (state, { date, categoryId, limit, todosType }) => ({
        todos: getDateTodos(state, date, categoryId, todosType, limit)
    }),
    {
        onClickedToggle: toggleTogo,
        onClickedDelete: deleteTodo,
        onClickedMove: moveTodo,
        onClickedSetInProgress: toggleTodoInProgress
    }
)(TodoList);