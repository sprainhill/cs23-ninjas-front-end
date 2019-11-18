import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({ history, setIsLoggedIn, setIsLoading }) => {
  const [user, setUser] = useState({
    username: '',
    password1: '',
    password2: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('user from register handlesubmit', user);
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://lambda-mud-test.herokuapp.com/';
    setIsLoading(true);
    axios
      .post(`${proxy}${url}/api/registration/`, user)
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
          name="password1"
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Confirm Password"
          name="password2"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
