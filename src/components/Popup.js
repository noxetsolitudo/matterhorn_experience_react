import React from 'react';

const Popup = () => {
  return (
    <div className="flex-col">
      <textarea name="mesage" id="message" cols="30" rows="4"></textarea>
      <button>Submit</button>
    </div>
  );
};

export default Popup;
