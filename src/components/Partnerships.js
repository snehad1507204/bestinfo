import React from 'react';
import './Partnerships.css';
import Accenture from '../assets/Company-logo/accenture.png';
import Amazon from '../assets/Company-logo/Amazon.png';
import BirlaSoft from '../assets/Company-logo/BirlaSoft.png';
import BristleCone from '../assets/Company-logo/BristleCone.jpg';
import Capgemini from '../assets/Company-logo/Capgemini.jpg';
import Cargill from '../assets/Company-logo/Cargill.png';
import Chargepoint from '../assets/Company-logo/chargepoint.png';
import ColsoftLabs from '../assets/Company-logo/colsoftLabs.jpg';
import Csc from '../assets/Company-logo/CSC.png';
import Damco from '../assets/Company-logo/Damco.jpg';
import Digicom from '../assets/Company-logo/Digicom.jpg';
import Dmart from '../assets/Company-logo/Dmart.jpg';
import Emids from '../assets/Company-logo/emids.png';
import GlobalLoogic from '../assets/Company-logo/GlobalLoogic.png';
import HCentive from '../assets/Company-logo/hCentive.png';
import Ibm from '../assets/Company-logo/IBM.png';
import Igt from '../assets/Company-logo/IGT.png';
import Infochips from '../assets/Company-logo/infochips.jpg';
import Infogain from '../assets/Company-logo/infogain.png';
import LimeTray from '../assets/Company-logo/LimeTray.jpg';
import Lt from '../assets/Company-logo/LT.jpg';
import Lumata from '../assets/Company-logo/Lumata.png';
import Mindtree from '../assets/Company-logo/Mindtree.jpg';
import Niit from '../assets/Company-logo/NIIT.png';
import Opinio from '../assets/Company-logo/opinio.jpg';
import Pwc from '../assets/Company-logo/pwc.png';
import Quovantis from '../assets/Company-logo/Quovantis.png';
import Scb from '../assets/Company-logo/scb.png';
import Smartplay from '../assets/Company-logo/Smartplay.jpg';
import Subex from '../assets/Company-logo/subex.jpg';
import Uhg from '../assets/Company-logo/UHG.jpg';
import UstGlobal from '../assets/Company-logo/USTGlobal.jpg';
import Xerox from '../assets/Company-logo/xerox.jpg';

const logos = [
  Accenture, Amazon, BirlaSoft, BristleCone, Capgemini, Cargill, Chargepoint, ColsoftLabs, Csc, Damco, Digicom, Dmart, Emids, GlobalLoogic, HCentive, Ibm, Igt, Infochips, Infogain, LimeTray, Lt, Lumata, Mindtree, Niit, Opinio, Pwc, Quovantis, Scb, Smartplay, Subex, Uhg, UstGlobal, Xerox
];

const Partnerships = () => {
  return (
    <section className="partnerships-section">
      <div className="partnerships-container">
        <div className="partnerships-header">
          <h2 className="partnerships-title">Our Partnerships</h2>
          <p className="partnerships-subtitle">In Good Company</p>
          <p className="partnerships-description">
            Transformational technologies demand equally transformative partnerships. 
            Full-stack capabilities coupled with depth and diversity of experience in leading platforms 
            that help organizations grow, innovate and thrive.
          </p>
        </div>

        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
