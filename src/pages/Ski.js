import { Link } from 'react-router-dom';
import React from 'react';
import Modal from '../components/Modal';
import Popup from '../components/Popup';

const Ski = ({ show, close, showPopup }) => {
  return (
    <div className="ski">
      <div className="container">
        <div className="flex flex-row align-pages">
          <div>
            <h1>Skiing</h1>
            <h2>Disover new slopes!</h2>
            <button onClick={showPopup} className="popup-button">
              Leave us a message
            </button>
          </div>
          <Link to="/">
            <button className="ski-btn mt">HOME</button>
          </Link>
        </div>
        <div className="flex align-center">
          <Modal show={show} close={close}>
            <Popup />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Ski;
