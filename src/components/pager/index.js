import { connect } from 'react-redux';
import PagerNavigator from './pager-navigator';
import { goToNext, goToPrevious, getIsDailyView } from '../../features/pager';
import showable from '../../hofs/showable';

export default connect(
    (state) => ({
        isVisible: getIsDailyView(state)
    }),
    {
        onArrowLeftClicked: goToPrevious,
        onArrowRightClicked: goToNext
    }
)(showable(PagerNavigator));
