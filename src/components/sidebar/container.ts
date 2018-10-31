import { connect } from 'react-redux';
import Sidebar from './component';
import showable from './../../hofs/showable';
import { isNoteSidebarOpen } from '../../features/notes/selectors';

export default connect(
    (state) => ({
        isVisible: isNoteSidebarOpen(state)
    })
)(showable(Sidebar));
