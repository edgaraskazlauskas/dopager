import { connect } from 'react-redux';
import CategoryList from './list';
import { TodoType } from '../../features/todos/selectors';

export default connect(
    (state) => ({
        todosType: null,
        categoryIds: state.categories.ids
    })
)(CategoryList);
