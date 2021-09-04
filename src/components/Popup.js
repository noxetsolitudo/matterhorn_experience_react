import { React, useState } from 'react';

const Popup = ({ onSubmit, close }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [warning, setWarning] = useState(false);

  const submitHandler = () => {
    if (author && content) {
      onSubmit([author, content]);
      close(false);
    } else {
      setWarning(true);
    }
  };

  return (
    <div className="modal-children flex flex-col align-center">
      <input
        name="author"
        placeholder="Type your name."
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
      <button className="submit-button" onClick={submitHandler}>
        Submit
      </button>
      {warning ? (
        <small className="my">Please fill out all fields</small>
      ) : null}
    </div>
  );
};

export default Popup;
