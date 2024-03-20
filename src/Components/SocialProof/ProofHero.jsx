import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import './ProofHero.css'; 
import socialProof from '../../assets/socialProof.webp';
import ImpactVid from '../../assets/ImpactVid.mp4';

const ProofHero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const playerRef = useRef(null);

  const handleButtonClick = (event) => {
    event.stopPropagation(); // Prevent click from bubbling up to the card-container
    setShowVideo(!showVideo); 
  };

  const handleCardClick = () => {
    if (showVideo && playerRef.current) {
      playerRef.current.seekTo(0, 'seconds'); // Rewind the video
      playerRef.current.getInternalPlayer().pause(); // Pause the video
      setShowVideo(false);
    }
  };

  return (
    <div className="container-fluid p-0" onClick={handleCardClick}>
    <img src={socialProof} alt="Social Proof" className="card-image"/>
    <div className="row g-0 align-items-center"  style={{ minHeight: '50vh' }}>
      <div className="col-lg-6 col-md-6 text-section">
        <h2>Amplify Your Influence! Simplify your Impact</h2>
        <p></p>
        <button className="btn btn-primary impact-button" onClick={handleButtonClick}>
          Play
        </button>
      </div>
      <div className="col-lg-6 col-md-6">
        {showVideo && (
           <div className="video-player">
           <ReactPlayer
             ref={playerRef}
             url={ImpactVid}
             playing={showVideo}
             controls
             width="100%"
             height="100%"
           />
         </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default ProofHero;
