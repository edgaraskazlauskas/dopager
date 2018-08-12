import { connect } from 'react-redux';
import ViewTypeToggle from './view-type-toggle';
import { togglePagerType } from '../../features/pager';

export default connect(
    (dispatch) => ({
        onChange: () => dispatch(togglePagerType())
    })
)(ViewTypeToggle);
