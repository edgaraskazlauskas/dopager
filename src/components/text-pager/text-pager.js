import * as React from 'react';

const TextPager = ({ onClickedNext, onClickedPrevious }) => (
    <div className="mih48">
        <div className="posf-xs b0 df jcsb c-gray pvm bg-white w100p asfe fxsh0 bdw0 bdtws-xs bdss-xs bdc-gray-light">
            <div className="curp mhm" onClick={onClickedPrevious}>Previous Day</div>
            <div className="curp mhm" onClick={onClickedNext}>Next Day</div>
        </div>
    </div>
)

export default TextPager;
