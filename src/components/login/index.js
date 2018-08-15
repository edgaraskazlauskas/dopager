import { connect } from 'react-redux';
import Login from './component';
import showable from './../../hofs/showable';
import { isAuthenticationPromptOpen } from '../../features/auth/selectors';
import { closeAuthenticationPrompt, authenticateGoogle } from '../../features/auth/actions';

export default connect(
    (state) => ({
        isVisible: isAuthenticationPromptOpen(state)
    }),
    {
        onClickedOk: authenticateGoogle,
        onClickedClose: closeAuthenticationPrompt
    }
)(showable(Login));
