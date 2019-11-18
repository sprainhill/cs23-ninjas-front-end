import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

const Enter = () => {
  return (
    <div>
      <h2>Login</h2>
      <Login />
      <h2>or Sign Up</h2>
      <SignUp />
    </div>
  );
};

export default Enter;
