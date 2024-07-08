import React, { useState } from 'react';
import FunctionInput from './components/FunctionInput';
import Graph from './components/Graph';
import './App.css';

const App = () => {
  const [functions, setFunctions] = useState([]);

  const addFunction = (newFunction) => {
    setFunctions([...functions, newFunction]);
  };

  return (
    <div className="App">
      <h1>Graphing Calculator</h1>
      <FunctionInput onAddFunction={addFunction} />
      <Graph functions={functions} />
    </div>
  );
};

export default App;
