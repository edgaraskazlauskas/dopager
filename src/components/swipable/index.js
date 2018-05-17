import { connect } from 'react-redux';
import Swipable from './swipable';
import { goToPrevious, goToNext } from '../../features/pager';

export default connect(
    null,
    {
        onSwipeLeft: goToNext,
        onSwipeRight: goToPrevious
    }
)(Swipable);