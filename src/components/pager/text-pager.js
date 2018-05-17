import * as React from 'react';

const TextPager = ({ onClickedNext, onClickedPrevious }) => (
    <div className="df jcsb c-gray">
        <div className="curp mhm" onClick={onClickedPrevious}>Previous Day</div>
        <div className="curp mhm" onClick={onClickedNext}>Next Day</div>
    </div>
)

export default TextPager;
