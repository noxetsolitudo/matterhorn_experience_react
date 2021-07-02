import React from 'react';

const Popup = () => {
  return (
    <div className="modal-children flex flex-col align-center">
      <textarea
        name="message"
        id="message"
        cols="35"
        rows="4"
        placeholder="Type the message here."
      ></textarea>
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default Popup;
