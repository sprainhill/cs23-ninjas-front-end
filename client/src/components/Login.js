import React from 'react';

const Login = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
