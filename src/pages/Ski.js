import { Link } from 'react-router-dom';
import React from 'react';
import Modal from '../components/Modal';
import Popup from '../components/Popup';

const Ski = ({ show, close, showPopup, onSubmit }) => {
  return (
    <div className="ski">
      <div className="container">
        <div className="flex flex-row align-pages">
          <div>
            <Link to="/">
              <button className="home-button">HOME</button>
            </Link>
            <h1 className="mt">Skiing</h1>
            <h2 className="myb">Disover new slopes!</h2>
            <button onClick={showPopup} className="popup-button">
              Leave us a message
            </button>
          </div>
        </div>
        <div className="flex align-center">
          <Modal show={show} close={close}>
            <Popup onSubmit={onSubmit} close={close} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Ski;
