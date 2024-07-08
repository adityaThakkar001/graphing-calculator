import React, { useState } from 'react';

const FunctionInput = ({ onAddFunction }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFunction(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter function (e.g., x^2 + 3x + 2)"
      />
      <button type="submit">Graph</button>
    </form>
  );
};

export default FunctionInput;
