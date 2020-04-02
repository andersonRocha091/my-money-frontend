import React from 'react';

import Grid from '../layout/Grid';

export default props => (
    <Grid cols={props.cols}>
        <div className='info-box'>
            <span className={`info-box-icon bg-${props.color}`}>
                <i className={props.icon}></i>
            </span>
            <div className='info-box-content'>
                <span className='info-box-text'>{props.text}</span>
                <span className='info-box-number'>{props.value}</span>
            </div>
        </div>
    </Grid>
);