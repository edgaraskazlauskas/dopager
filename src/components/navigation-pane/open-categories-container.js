import { connect } from 'react-redux';
import NavigationPaneLink from './navigation-pane-link';
import { openCategoryList } from '../../features/categories/actions';

const CategoriesLink = connect(
    () => ({
        label: 'Open Categories'
    }),
    {
        onClick: openCategoryList,
    }
)(NavigationPaneLink);

export default CategoriesLink;
