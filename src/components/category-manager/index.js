import { connect } from 'react-redux';
import CategoryList from './list';

export default connect(
    (state) => ({
        categoryIds: state.categories.ids
    })
)(CategoryList);
