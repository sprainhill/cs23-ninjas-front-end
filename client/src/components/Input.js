import React from 'react';

const Input = ({ move, handleChange, direction }) => {
  return (
    <div>
      <form onSubmit={e => move(e, direction)}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Type commands here:"
          value={direction}
        />
      </form>
    </div>
  );
};

export default Input;
