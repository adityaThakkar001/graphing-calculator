import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = ({ functions }) => {
  const data = {
    labels: [...Array(100).keys()].map(x => x - 50),
    datasets: functions.map((func, index) => ({
      label: `Function ${index + 1}`,
      data: [...Array(100).keys()].map(x => eval(func.replace(/x/g, (x - 50).toString()))),
      borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
      fill: false,
    }))
  };

  return <Line data={data} />;
};

export default Graph;
