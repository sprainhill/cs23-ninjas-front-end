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
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}api/registration/`, user)
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
    <div className="form signup-container">
      <form onSubmit={handleSubmit}>
        <h2>New Player?</h2>
        <div className="form-inputs-container">
          <hr />
          <input
            className="input-text"
            onChange={handleChange}
            type="text"
            placeholder="Username"
            name="username"
          />
          <hr />
          <input
            className="input-text"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password1"
          />
          <hr />
          <input
            className="input-text"
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
            name="password2"
          />
          <hr />
        </div>
        <button className="form-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
