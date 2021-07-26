import { React, useState, onSubmit } from 'react';

const Popup = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="modal-children flex flex-col align-center">
      <input
        name="author"
        placeholder="Type the message here."
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      ></input>
      <textarea
        name="content"
        id="message"
        cols="35"
        rows="4"
        placeholder="Type the message here."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        className="submit-button"
        onClick={() => onSubmit([author, content])}
      >
        Submit
      </button>
    </div>
  );
};

export default Popup;
