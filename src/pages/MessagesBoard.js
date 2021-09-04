import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Messages from '../components/Messages';

const MessagesBoard = ({ messagesClimbDB, messagesSkiDB, messagesFlyDB }) => {
  return (
    <div className="messages-board ">
      <div className="flex flex-col align-center text-left">
        <div>
          <Link to="/">
            <button className="home-button myt">HOME</button>
          </Link>
        </div>
        <div className="flex flex-row gap">
          <div className="flex-item">
            <Messages title="Climb" db={messagesClimbDB} sport={'climb'} />
          </div>
          <div className="flex-item">
            <Messages title="Ski" db={messagesSkiDB} sport={'ski'} />
          </div>
          <div className="flex-item">
            <Messages title="Fly" db={messagesFlyDB} sport={'fly'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesBoard;
