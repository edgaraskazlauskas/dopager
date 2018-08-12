import { connect } from 'react-redux';
import TodoInput from './todo-input';
import { createCategory } from '../../features/categories/actions';

export default connect(
    () => ({
        placeholder: 'Enter Category Name...'
    }),
    (dispatch, { date }) => ({
        onFinished: (name) => dispatch(createCategory(name))
    })
)(TodoInput);
