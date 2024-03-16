import React, { useState , useRef } from 'react';
import ReactPlayer from 'react-player';
import './ProofHero.css'; 
import socialProof from '../../assets/socialProof.webp';
import ImpactVid from '../../assets/ImpactVid.mp4'

const ProofHero = ({ videoUrl }) => {
  const [showVideo, setShowVideo] = useState(false);
  const playerRef = useRef(null);

  const handleButtonClick = () => {
    event.stopPropagation();// Prevent click from bubbling up to the card-container
    setShowVideo(!showVideo); // This will toggle the boolean value of showVideo
  };

  const handleCardClick = () => {
    if (showVideo) {
      // If the video is playing, stop it and hide the player
      if (playerRef.current) {
        playerRef.current.seekTo(0, 'seconds'); // Rewind the video to the start
        playerRef.current.getInternalPlayer().pause(); // Use the internal player API to pause the video
      }
      setShowVideo(false);
    }
  };

  return (
    <div className="card-container"  onClick={handleCardClick}>
      <img src={socialProof} alt="Social Proof" className="card-image"/>
      <button className="impact-button" onClick={handleButtonClick}>
        Make an Impact!
      </button>

      {showVideo && (
        <div className="video-player">
          <ReactPlayer
            url={ImpactVid}
            playing={showVideo}
            controls
            width="100%"
            height="100%"
          />
        </div>
      )}
    </div>
  );
};

export default ProofHero;
