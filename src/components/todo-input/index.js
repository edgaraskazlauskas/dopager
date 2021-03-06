import { connect } from 'react-redux';
import TodoInput from './todo-input';
import { addTodo } from '../../features/todos/actions';

export default connect(
    () => ({
        placeholder: 'Enter a Todo Item...'
    }),
    (dispatch, { date }) => ({
        onFinished: (description) => dispatch(addTodo(description, date))
    })
)(TodoInput);
