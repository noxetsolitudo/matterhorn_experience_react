import React from 'react';

const Modal = ({ children, show, close }) => {
  return (
    <div>
      {show ? (
        <div>
          <div className="modal-backdrop"></div>
          <div className="modal-children">
            <button onClick={close} className="close-button">
              x
            </button>
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
