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
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://lambda-mud-test.herokuapp.com/';
    setIsLoading(true);
    axios
      .post(`${proxy}${url}/api/login/`, user)
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Username"
          name="username"
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
