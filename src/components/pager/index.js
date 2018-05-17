import { connect } from 'react-redux';
import TextPager from './text-pager';
import { goToNext, goToPrevious } from '../../features/pager';

export default connect(
    null,
    {
        onClickedNext: goToNext,
        onClickedPrevious: goToPrevious
    }
)(TextPager);
