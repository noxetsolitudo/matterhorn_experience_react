import React from 'react';
import { Link } from 'react-router-dom';

const Messages = ({ title, db, sport }) => {
  return (
    <div className={sport} style={{ background: 'none' }}>
      {/* only way to not to force the main page background apearing is using  style={{ background: 'none' }}*/}
      <div className="padding">
        <Link to={sport}>
          <h1>{title}</h1>
        </Link>
        {db.map((item) => (
          <div>
            <h3 className="messages-underline">{item.author}</h3>
            <h4>{item.content}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
