import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

const Enter = ({ history, setIsLoggedIn, setIsLoading }) => {
  return (
    <div>
      <h2>Login</h2>
      <Login
        setIsLoading={setIsLoading}
        setIsLoggedIn={setIsLoggedIn}
        history={history}
      />
      <h2>or Sign Up</h2>
      <SignUp
        setIsLoading={setIsLoading}
        setIsLoggedIn={setIsLoggedIn}
        history={history}
      />
    </div>
  );
};

export default Enter;
