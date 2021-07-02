import { React, useState } from 'react';
import climbDB from '../db/messagesBoardClimbDB.json';
import skiDB from '../db/messagesBoardSkiDB.json';
import flyDB from '../db/messagesBoardFlyDB.json';
import Messages from '../components/Messages';

const MessagesBoard = () => {
  const [messagesClimbDB, setMessagesClimbDB] = useState(climbDB);
  const [messagesSkiDB, setMessagesSkiDB] = useState(skiDB);
  const [messagesFlyDB, setMessagesFlyDB] = useState(flyDB);
  return (
    <div className="messages-board flex flex-row gap">
      <div>
        <Messages title="Climb" db={messagesClimbDB} colorCoding={'climb'} />
      </div>
      <div>
        <Messages title="Ski" db={messagesSkiDB} colorCoding={'ski'} />
      </div>
      <div>
        <Messages title="Fly" db={messagesFlyDB} colorCoding={'fly'} />
      </div>
    </div>
  );
};

export default MessagesBoard;
