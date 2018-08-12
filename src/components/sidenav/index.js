import { connect } from 'react-redux';
import Sidenav from './sidenav';
import { openCategoryList } from '../../features/categories/actions';

export default connect(
    null,
    {
        openCategoryList: openCategoryList
    }
)(Sidenav);
