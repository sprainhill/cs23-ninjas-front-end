import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history, setIsLoggedIn, setIsLoading }) => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('user from login handlesubmit', user);
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}api/login/`, user)
      .then(res => {
        localStorage.setItem('token', res.data.key);
        setIsLoading(false);
        setIsLoggedIn(true);
        history.push('/play');
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="form login-container">
      <form onSubmit={handleSubmit}>
        <h2>Existing Player?</h2>
        <div className="form-inputs-container">
          <hr />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Username"
            name="username"
          />
          <hr />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
          />
          <hr />
        </div>
        <button className="form-button" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
