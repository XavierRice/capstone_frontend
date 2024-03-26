import React, {useState, useEffect} from 'react'


const ProgressBar = () => {

    // const { event } = useLocation.state

    return (
        
        <div class="progress-container">
        <div class="progress-bar"></div>
        <div class="progress-labels">
            <span class="goal">Goal: $1000</span>
            <span class="current">Current: $500</span>
        </div>
    </div>
    )
};

export default ProgressBar;