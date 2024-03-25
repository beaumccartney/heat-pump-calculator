import React, { useEffect, useState } from "react";

import "../../style/main.scss";
import "../dashboard/Dashboard.css";

import Cards from "./components/Cards";
import CompareHeatPump from "./components/CompareHeatPump";
import PreviousSearches from "./components/PreviousSearches";
import TopheatPumps from "./components/TopheatPumps";
import EnergySavingsChart from "./components/energySavingsChart";


export const Dashboard = () => {

  return (
    <>
      <div className="dashboard">
        <div className = "heading">
          <h2>Welcome to the Heat Pump Selector</h2>
          <p>Explore & Save Money With The Best Heat Pump For Your <br />Home.</p>
        </div>
        <div className="top-section">
          <CompareHeatPump />
          <Cards />
        </div>

        <div className="bottom-section">
          <div className="left-sec">
            <PreviousSearches />
            <EnergySavingsChart />
          </div>
          <div className="right-sec">
            <TopheatPumps />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
