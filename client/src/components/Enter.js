import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

const Enter = ({ history }) => {
  return (
    <div>
      <h2>Login</h2>
      <Login history={history} />
      <h2>or Sign Up</h2>
      <SignUp history={history} />
    </div>
  );
};

export default Enter;
