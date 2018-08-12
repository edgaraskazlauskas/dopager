import React from 'react';
import * as classnames from 'classnames';

export const Type = {
    Regular: 'regular',
    Large: 'large'
}

const DayHeader = ({ date, type = Type.Regular, label, onClickedLabel }) => (
    <div className={classnames('df aic jcc', {
        'pvm fzl bg-primary-light': type === Type.Large
    })}>
        <span className="mrs">{date}</span>
        <span className="bg-primary c-white phs pvs fz16 bdrs5" onClick={onClickedLabel}>
            {label}
        </span>
    </div>
);

export default DayHeader;