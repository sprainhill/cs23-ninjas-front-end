import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

const Enter = ({ history, setIsLoggedIn, setIsLoading }) => {
  return (
    <div className="enter-form-container">
      <Login
        setIsLoading={setIsLoading}
        setIsLoggedIn={setIsLoggedIn}
        history={history}
      />

      <SignUp
        setIsLoading={setIsLoading}
        setIsLoggedIn={setIsLoggedIn}
        history={history}
      />
    </div>
  );
};

export default Enter;
