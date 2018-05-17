import { connect } from 'react-redux';
import PagerNavigator from './pager-navigator';
import { goToNext, goToPrevious } from '../../features/pager';

export default connect(
    null,
    {
        onArrowLeftClicked: goToNext,
        onArrowRightClicked: goToPrevious
    }
)(PagerNavigator);
