import React from 'react';

const SignUp = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password1" />
        <input
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
