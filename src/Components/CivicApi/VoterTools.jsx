import { useEffect } from 'react';

const VoterTools = () => {
  useEffect(() => {
    const config = {
      "logo": {"type":"default"},
      "official-only": true
    };

    const loadVIT = () => {
      if (window.vit) {
        window.vit.core.init("_vit", config);
      } else {
        setTimeout(loadVIT, 500);
      }
    };

    // Load the VIT script dynamically
    const script = document.createElement('script');
    script.src = 'https://votinginfotool.org/js/compiled/app.js';
    script.onload = loadVIT;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='voterWidget' >
    <div id="vit-size-container" className="vit-size-container" style={{ width: '100%', height: '100%' }}>
      <div id="_vit"></div>
    </div>
    </div>
  );
};

export default VoterTools;
