import { connect } from 'react-redux';
import { getCategoryNames } from './../../features/categories/selectors';
import CategoryList from './list';

export default connect(
    (state) => ({
        categoryNames: getCategoryNames(state)
    })
)(CategoryList);
