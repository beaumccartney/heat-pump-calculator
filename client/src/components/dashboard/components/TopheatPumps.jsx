import React, { useState } from "react";
import HeatPump from '../../assets/images/heat-pump.png'

function TopheatPumps() {
  const heatPumpData = {
    "Heat Pumps": [
      { model: "Heat Pump - 3600", price: "$200" },
      { model: "Heat Pump - 360112", price: "$250" },
      { model: "Heat Pump - 36", price: "$3003" },
      { model: "Heat Pump - 360", price: "$3501" },
      { model: "Heat Pump - 3", price: "$30" },
      { model: "Heat Pump - 36033", price: "$35023" },
      { model: "Heat Pump - 3600", price: "$200" },
      { model: "Heat Pump - 360112", price: "$250" },
    ],
    "Energy Efficient": [
      { model: "Energy Pump - 46003", price: "$23120" },
      { model: "Energy Pump - 46011", price: "2$233221" },
      { model: "Energy Pump - 4600", price: "$220" },
      { model: "Energy Pump - 46", price: "$270" },
      { model: "Energy Pump - 460", price: "$220" },
      { model: "Energy Pump - 4", price: "$270" },
      { model: "Energy Pump - 4600", price: "$220" },
      { model: "Energy Pump - 4601", price: "$270" },
    ],
    "Electricity Efficient": [
      { model: "Electric Pump - 5600", price: "$230" },
      { model: "Electric Pump - 78634", price: "$28050" },
      { model: "Electric Pump - 521", price: "$28056" },
      { model: "Electric Pump - 12", price: "$28" },
      { model: "Electric Pump - 7", price: "$2805" },
      { model: "Electric Pump - 5606", price: "$280213" },
      { model: "Electric Pump - 5600", price: "$230" },
      { model: "Electric Pump - 78634", price: "$28050" },
    ],
  };

  const [activeTab, setActiveTab] = useState("Heat Pumps");
  const tabs = ["Heat Pumps", "Energy Efficient", "Electricity Efficient"];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="top-HeatPumps">
        <h2 className="title-top-hp">Top 9 Heat Pumps</h2>
        <div className="topHP-tabs">
            {tabs.map((val) => (
                <div className={`topHP-tab ${activeTab === val ? "active" : ""}`} onClick={() => handleTabChange(val)}>{val}</div>
            ))}
        </div>
        <div className="topHP-list">
            {heatPumpData[activeTab].map((val) => (
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", rowGap: "2em" }}>
                    <div style={{ display: "flex", columnGap: ".5em", alignItems: "center" }}>
                        <img src={HeatPump} style={{ width: "55px", height: "55px" }} />
                        <p>{val.model}</p>
                    </div>
                    <p style={{ fontWeight: "700" }}>{val.price}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default TopheatPumps;
