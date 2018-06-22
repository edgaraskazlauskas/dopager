import { connect } from 'react-redux';
import Sidenav from './sidenav';
import { togglePagerType } from '../../features/pager';

export default connect(
    null,
    {
        onToggledView: togglePagerType
    }
)(Sidenav);
