import { connect } from 'react-redux';
import ViewTypeToggle from './view-type-toggle';
import { togglePagerType } from '../../features/pager';

export default connect(
    () => ({
        placeholder: 'Enter a Todo Item...'
    }),
    (dispatch, { date }) => ({
        onChange: () => dispatch(togglePagerType())
    })
)(ViewTypeToggle);
