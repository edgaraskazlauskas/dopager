import { connect } from 'react-redux';
import TodoInput from './todo-input';
import { addTodo } from '../../features/todos';

export default connect(
    () => ({
        placeholder: 'Enter a Todo Item...'
    }),
    {
        onFinished: addTodo
    }
)(TodoInput);
