import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Progressbar.css'

const Progressbar = ({ donateAmount }) => {
    const [donationGoal, setDonationGoal] = useState(0)
    const [verifiedFunds, setVerifiedFunds] = useState(0)
    const [currentAmount, setCurrentAmount] = useState(800)
    //WEBHOOK INTERGRATION FETCH HERE FOR VerifiedFunds/CURRENT AMOUNT FROM STRIPE
   

    useEffect(() => {
        setDonationGoal(donateAmount + 10)
    }, [donateAmount])

    const percentage = Math.min((currentAmount / donationGoal) * 100, 100); // Ensure percentage doesn't exceed 100%

    return (
        <div>
              <ProgressBar 
            animated 
            now={percentage} 
            label={`${percentage.toFixed(0)}%`} 
            variant="success" 
            style={{ width: '50vh', height: '100%', backgroundColor:'#BC9EC1' }} // Adjust the width as necessary, height for visibility
        />
        </div>
    );
};

export default Progressbar;