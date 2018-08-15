import React from 'react';

const Login = ({ onClickedOk, onClickedClose }) => (
    <div className="posf df jcc aic b0 r0 l0 fz16 bg-primary c-white tac pvm phm">
        <span className="mrs">Log in with your Google account.</span>
        <div className="pvs phm bg-white c-primary bdrs5 mrs curp" onClick={onClickedOk}>OK</div>
        <div className="pvs phm bg-white c-primary bdrs5 curp" onClick={onClickedClose}>Cancel</div>
    </div>
)

export default Login;