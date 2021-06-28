import React from 'react';
import Modal from '../components/Modal';
import Popup from '../components/Popup';

const Fly = ({ show, close, showPopup, whatClass }) => {
  return (
    <div className={whatClass}>
      <h1>Flying</h1>
      <h2>Meet the freedom like no other!</h2>
      <button onClick={showPopup}>Leave us a message</button>
      <Modal show={show} close={close}>
        <Popup />
      </Modal>
    </div>
  );
};

export default Fly;
