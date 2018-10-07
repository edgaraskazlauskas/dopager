import { connect } from 'react-redux';
import NavigationPaneLink from './navigation-pane-link';
import { openCategoryList } from '../../features/categories/actions';
import showable from '../../hofs/showable';
import { isCategoryPageOpen } from '../../features/categories/selectors';

const CategoriesLink = connect(
    (state) => ({
        label: 'Open Categories',
        isVisible: !isCategoryPageOpen(state)
    }),
    {
        onClick: openCategoryList,
    }
)(showable(NavigationPaneLink));

export default CategoriesLink;
