import { connect } from 'react-redux';
import { getCategoryName, getCategoryItems } from './../../features/categories/selectors';
import { openCategory } from './../../features/categories/actions';
import CategoryCard from './card';

export default connect(
    (state, { categoryId }) => ({
        title: getCategoryName(state, categoryId),
        items: getCategoryItems(state, categoryId)
    }),
    (dispatch, { categoryId }) => ({
        onClick: () => dispatch(openCategory(categoryId))
    })
)(CategoryCard);
