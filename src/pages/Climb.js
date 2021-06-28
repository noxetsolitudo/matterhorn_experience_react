import React from 'react';
import Modal from '../components/Modal';
import Popup from '../components/Popup';

const Climb = ({ show, close, showPopup }) => {
  return (
    <div className="climb">
      <h1>Climbing</h1>
      <h2>Ready for new chalenges?</h2>
      <button onClick={showPopup} className="popup-button climb-popup">
        Leave us a message
      </button>
      <Modal show={show} close={close}>
        <Popup />
      </Modal>
    </div>
  );
};

export default Climb;
