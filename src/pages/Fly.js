import { Link } from 'react-router-dom';
import React from 'react';
import Modal from '../components/Modal';
import Popup from '../components/Popup';

const Fly = ({ show, close, showPopup }) => {
  return (
    <div className="fly">
      <div className="container">
        <div className="flex flex-row align-pages">
          <div>
            <h1>Flying</h1>
            <h2>Enjoy the freedom like no other!</h2>
            <button onClick={showPopup} className="popup-button">
              Leave us a message
            </button>
          </div>
          <Link to="/">
            <button className="fly-btn mt">HOME</button>
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

export default Fly;
