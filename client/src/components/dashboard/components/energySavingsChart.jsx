import React from "react";
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function EnergySavingsChart() {
  const data = {
    labels: ["HEAT PUMP 1", "HEAT PUMP 2", "HEAT PUMP 3", "HEAT PUMP 4"],
    datasets: [
      {
        label: "Energy Savings",
        data: [12, 19, 3, 5],
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
        <h2 className="ES-title">Energy Saving For Different Heat Pumps</h2>
        <div style={{ width: "55em" }}>
            <Bar data={data} options={options} className="bargraph" />
        </div>
    </div>
  );
}

export default EnergySavingsChart;
