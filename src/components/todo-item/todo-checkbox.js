import React from 'react';
import Icon from 'evergreen-ui/commonjs/icon/src/Icon';

const TodoCheckbox = ({ checked, onChange }) => <Icon onClick={onChange} icon={checked ? 'tick-circle' : 'circle'} color={checked ? 'success' : ''} />;

export default TodoCheckbox;
