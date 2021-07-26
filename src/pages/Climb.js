import { Link } from 'react-router-dom';
import React from 'react';
import Modal from '../components/Modal';
import Popup from '../components/Popup';

const Climb = ({ show, close, showPopup, onSubmit }) => {
  return (
    <div className="climb">
      <div className="container">
        <div className="flex flex-row align-pages ">
          <div>
            <h1>Climbing</h1>
            <h2>Ready for new chalenges?</h2>
            <button onClick={showPopup} className="popup-button">
              Leave us a message
            </button>
          </div>
          <Link to="/">
            <button className="mt">HOME</button>
          </Link>
        </div>
        <div className="flex align-center">
          <Modal show={show} close={close}>
            <Popup onSubmit={onSubmit} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Climb;
