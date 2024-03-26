import React from 'react';
import ProofHero from '../SocialProof/ProofHero';
import TrustAndSafety from '../TrustAndSafety/TrustAndSafety';
import './TrustBlock.css'

const TrustBlock = () => {
    return (
        <div className='trust-container'>
            <TrustAndSafety />
            {/* {bento box} */}
            <ProofHero />
        </div>
    );
};

export default TrustBlock;