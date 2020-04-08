import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className="size1 bg0 where1-parent">
      <div className="flex-c-m bg-img1 size2 where1 overlay1 where2 respon2" style={{ backgroundImage: 'url(' + require('./images/bg-moon.jpg') + ')' }}>
        <div className="wsize2 flex-w flex-c-m cd100 js-tilt">

        </div>
      </div>

      <div className="size3 flex-col-sb flex-w p-l-75 p-r-75 p-t-45 p-b-45 respon1">
        <div className="p-t-50 p-b-60">
          <div>
            Coming Soon!
						</div>
          <p className="m1-txt1 p-b-36">
            Moonlight<span className="m1-txt2">Stack</span>
          </p>
        </div>

        <div className="flex-w">
          <a target="_blank" href="#" className="flex-c-m size5 bg3 how1 trans-04 m-r-5">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a target="_blank" href="https://twitter.com/moonlightstack" className="flex-c-m size5 bg4 how1 trans-04 m-r-5">
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a target="_blank" href="https://www.youtube.com/channel/UCN6G1t4Tdm-Mj5yHbMlYxAw" className="flex-c-m size5 bg5 how1 trans-04 m-r-5">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
