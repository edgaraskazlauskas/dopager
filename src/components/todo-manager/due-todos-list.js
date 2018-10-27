import { connect } from 'react-redux';
import { toggleTogo, deleteTodo, moveTodo, toggleTodoInProgress } from '../../features/todos/actions';
import { getDueTodos } from '../../features/todos/selectors';
import TodoList from '../todo-list/todo-list';
import showable from '../../hofs/showable';
import { getIsDailyView } from '../../features/pager';

export default connect(
    (state, { categoryId }) => ({
        isVisible: !getIsDailyView(state),
        todos: getDueTodos(state, { categoryId })
    }),
    {
        onClickedToggle: toggleTogo,
        onClickedDelete: deleteTodo,
        onClickedMove: moveTodo,
        onClickedSetInProgress: toggleTodoInProgress
    }
)(showable(TodoList));
