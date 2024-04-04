import React from "react";

function Results({ heatPump1, heatPump2 }) {
  // Function to compare two heat pumps
  const compareHeatPumps = () => {
    // Perform comparison logic here
    // For example, calculate differences between heatPump1 and heatPump2
    console.log("Comparison triggered");
  };

  const generateDonutChart = (heatPump) => {
    const ratio =
      heatPump.heating_capacity_rated_47 / heatPump.cooling_capacity_rated_95;
    const percentage = Math.round(ratio * 100 * 10) / 10; // Round to 1 decimal place

    const radius = 50;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const progress = (percentage / 100) * circumference;

    return (
      <svg width="120" height="120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#ddd"
          strokeWidth={strokeWidth}
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#ff6b6b"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="20px"
          fill="#333"
        >
          {percentage}%
        </text>
      </svg>
    );
  };

  return (
    <div className="results">
      <h2>Comparison Results</h2>
      {heatPump1 && heatPump2 ? (
        <div className="comparison-details">
          <div className="comparison-item">
            <div className="heatpump-info">
              <h3>{heatPump1.model_series}</h3>
              <div className="flexRow">
              <div className="comparison-graph">
              {generateDonutChart(heatPump1)}
            </div>
                <ul>
                    <li>
                    <strong>COP Max:</strong> {heatPump1.cop_max_5}
                    </li>
                    <li>
                    <strong>Heating Capacity Max:</strong>{" "}
                    {heatPump1.heating_capacity_max_5}
                    </li>
                    <li>
                    <strong>Heating Capacity Rated:</strong>{" "}
                    {heatPump1.heating_capacity_rated_47}
                    </li>
                    <li>
                    <strong>Cooling Capacity Rated:</strong>{" "}
                    {heatPump1.cooling_capacity_rated_95}
                    </li>
                    <li>
                    <strong>System Type:</strong> {heatPump1.system_type}
                    </li>
                </ul>
                
              </div>
            </div>
            
          </div>
          <div className="comparison-item">
            <div className="heatpump-info">
              <h3>{heatPump2.model_series}</h3>
              <div className="flexRow">
              <div className="comparison-graph">
                  {generateDonutChart(heatPump2)}
                </div>
                <ul>
                  <li>
                    <strong>COP Max:</strong> {heatPump2.cop_max_5}
                  </li>
                  <li>
                    <strong>Heating Capacity Max:</strong>{" "}
                    {heatPump2.heating_capacity_max_5}
                  </li>
                  <li>
                    <strong>Heating Capacity Rated:</strong>{" "}
                    {heatPump2.heating_capacity_rated_47}
                  </li>
                  <li>
                    <strong>Cooling Capacity Rated:</strong>{" "}
                    {heatPump2.cooling_capacity_rated_95}
                  </li>
                  <li>
                    <strong>System Type:</strong> {heatPump2.system_type}
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Please select two heat pumps to compare.</p>
      )}
      {/* <button className="compare-btn" onClick={compareHeatPumps}>
        Compare
      </button> */}
    </div>
  );
}

export default Results;
