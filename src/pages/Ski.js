import React from 'react';
import Modal from '../components/Modal';
import Popup from '../components/Popup';

const Ski = ({ show, close, showPopup, whatClass }) => {
  return (
    <div className={whatClass}>
      <h1>Skiing</h1>
      <h2>Disover new slopes!</h2>
      <button onClick={showPopup}>Leave us a message</button>
      <Modal show={show} close={close}>
        <Popup />
      </Modal>
    </div>
  );
};

export default Ski;
