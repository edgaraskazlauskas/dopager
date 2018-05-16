import React from 'react';
import './checkbox.css';

const TodoCheckbox = ({ checked, onChange, children }) => (
    <label className="container">
        {children}
        <input className="checkbox" type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkmark"></span>
    </label>
);

export default TodoCheckbox;
