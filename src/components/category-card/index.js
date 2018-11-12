import { connect } from 'react-redux';
import { getCategoryName, getCategoryItems } from './../../features/categories/selectors';
import { openCategory, deleteCategory } from './../../features/categories/actions';
import CategoryCard from './card';

export default connect(
    (state, { categoryId, todosType }) => ({
        categoryId,
        todosType,
        title: getCategoryName(state, { id: categoryId })
    }),
    (dispatch, { categoryId }) => ({
        onClick: () => dispatch(openCategory(categoryId)),
        onClickedDelete: () => dispatch(deleteCategory(categoryId))
    })
)(CategoryCard);
