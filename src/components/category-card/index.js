import { connect } from 'react-redux';
import { getCategoryName, getCategoryItems } from './../../features/categories/selectors';
import { openCategory, deleteCategory } from './../../features/categories/actions';
import CategoryCard from './card';

export default connect(
    (state, { categoryId }) => ({
        title: getCategoryName(state, { id: categoryId }),
        items: getCategoryItems(state, { id: categoryId, limit: 5 })
    }),
    (dispatch, { categoryId }) => ({
        onClick: () => dispatch(openCategory(categoryId)),
        onClickedDelete: () => dispatch(deleteCategory(categoryId))
    })
)(CategoryCard);
