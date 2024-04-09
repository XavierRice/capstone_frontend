import { useEffect } from 'react';
import 'https://votinginfotool.org/js/compiled/app.js'
import '../CivicApi/VoterWidget/VotingCss.css'

const VoterTools = () => {
  
  useEffect(() => {
    const loadVIT = () => {
      if (typeof vit !== 'undefined'){
        vit.core.init("_vit", {
          "logo": {"type":"default"},
          "official-only": true
        });
      } else {
        setTimeout(loadVIT, 500);
      }
    };
    loadVIT();
  }, []);

  return (
    <div id="vit-size-container" className="vit-size-container" style={{width: '100%', height: '100%'}}>
      <div id="_vit"></div>
    </div>
  );


};

export default VoterTools;
