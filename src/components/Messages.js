import React from 'react';

const Messages = ({ title, db, colorCoding }) => {
  return (
    <div className={colorCoding} style={{ background: 'none' }}>
      {/* only way to not to force the main page background apearing is using  style={{ background: 'none' }}*/}
      <div className="padding">
        <h1>{title}</h1>
        {db.map((item) => (
          <div>
            <h2 className="underline"> {item.author}</h2>
            <h3>{item.content}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
