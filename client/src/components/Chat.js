import React from 'react';

const Chat = ({ logout }) => {
  return (
    <div>
      <h3>Chat</h3>
      <hr />
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Chat;
