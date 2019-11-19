import React from 'react';

const Input = ({ move, setDirection, direction }) => {
  const handleChange = e => {
    setDirection(e.target.value);
  };
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
