import React, { useState } from "react";
import HeatPump from '../../assets/images/heat-pump.png'

function TopheatPumps() {
  const heatPumpData = {
    "Heat Pumps": [
      { model: "Heat Pump - 3455", price: "$2,000" },
      { model: "Heat Pump - 6765", price: "$2,465" },
      { model: "Heat Pump - 4566", price: "$3,644" },
      { model: "Heat Pump - 3665", price: "$1,342" },
      { model: "Heat Pump - 7886", price: "$4,342" },
      { model: "Heat Pump - 3635", price: "$2,890" },
      { model: "Heat Pump - 4356", price: "$4,000" },
      { model: "Heat Pump - 5634", price: "$3,250" },
    ],
    "Energy Efficient": [
      { model: "Energy Pump - 4600", price: "$2,355" },
      { model: "Energy Pump - 1443", price: "$4,555" },
      { model: "Energy Pump - 4600", price: "$2,434" },
      { model: "Energy Pump - 3234", price: "$8,435" },
      { model: "Energy Pump - 1535", price: "$4,343" },
      { model: "Energy Pump - 8565", price: "$5,324" },
      { model: "Energy Pump - 3545", price: "$2,344" },
      { model: "Energy Pump - 3455", price: "$1,343" },
    ],
    "Electricity Efficient": [
      { model: "Electric Pump - 5423", price: "$3,535" },
      { model: "Electric Pump - 4577", price: "$3,222" },
      { model: "Electric Pump - 7767", price: "$1,756" },
      { model: "Electric Pump - 2345", price: "$4,344" },
      { model: "Electric Pump - 5632", price: "$2,443" },
      { model: "Electric Pump - 8766", price: "$3,342" },
      { model: "Electric Pump - 4567", price: "$2,354" },
      { model: "Electric Pump - 6784", price: "$1,344" },
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
