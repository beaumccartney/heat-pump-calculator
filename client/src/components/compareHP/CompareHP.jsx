import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import "./compareHP.css";

function CompareHP() {
  const [heatPumps, setHeatPumps] = useState([
    {
        "id": 156536,
        "brand": "BRYANT HEATING AND COOLING SYSTEMS",
        "model_series": "EVOLUTION V Heat Pump",
        "ahri_certificate_number": 214240766,
        "outdoor_unit_number": "288BNV036*0**C*",
        "indoor_unit_number": "CNPV*4824AL*+UI",
        "model_number": "",
        "system_type": "Central Air Conditioning Heat Pump (HP)",
        "system_type_id": 1,
        "ducting_configuration": "Singlezone Ducted, Centrally Ducted",
        "ducting_configuration_id": 3,
        "hspf_region_iv": null,
        "seer": null,
        "eer": null,
        "ieer": null,
        "cop_max_5": 1.96,
        "heating_capacity_max_5": 19000,
        "heating_capacity_rated_47": 32800,
        "cooling_capacity_rated_95": 33400,
        "photos": []
    },
    {
        "id": 156535,
        "brand": "BRYANT HEATING AND COOLING SYSTEMS",
        "model_series": "EVOLUTION V Heat Pump",
        "ahri_certificate_number": 214240756,
        "outdoor_unit_number": "288BNV036*0**C*",
        "indoor_unit_number": "CNPV*4824AL*+UI",
        "model_number": "",
        "system_type": "Central Air Conditioning Heat Pump (HP)",
        "system_type_id": 1,
        "ducting_configuration": "Singlezone Ducted, Centrally Ducted",
        "ducting_configuration_id": 3,
        "hspf_region_iv": null,
        "seer": null,
        "eer": null,
        "ieer": null,
        "cop_max_5": 1.96,
        "heating_capacity_max_5": 19000,
        "heating_capacity_rated_47": 32800,
        "cooling_capacity_rated_95": 33400,
        "photos": []
    },
    {
        "id": 156534,
        "brand": "BRYANT HEATING AND COOLING SYSTEMS",
        "model_series": "EVOLUTION V Heat Pump",
        "ahri_certificate_number": 214240746,
        "outdoor_unit_number": "288BNV036*0**C*",
        "indoor_unit_number": "CNPV*4824AL*+UI",
        "model_number": "",
        "system_type": "Central Air Conditioning Heat Pump (HP)",
        "system_type_id": 1,
        "ducting_configuration": "Singlezone Ducted, Centrally Ducted",
        "ducting_configuration_id": 3,
        "hspf_region_iv": null,
        "seer": null,
        "eer": null,
        "ieer": null,
        "cop_max_5": 1.94,
        "heating_capacity_max_5": 19000,
        "heating_capacity_rated_47": 32800,
        "cooling_capacity_rated_95": 34400,
        "photos": []
    },
  ]);
  const [selectedHeatPump1, setSelectedHeatPump1] = useState("");
  const [selectedHeatPump2, setSelectedHeatPump2] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ashp.neep.org/api/products/?brand=null&cap5max=80000&cap5min=0&capmax=80000&capmin=0&format=api&page=1&style=tile&system_type=1"
        );
        //setHeatPumps(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="compareHP-container">
      <div className="selection">
        <h2>Select Heat Pumps</h2>
        <div className="dropdown-container">
          <select
            className="dropdown"
            value={selectedHeatPump1}
            onChange={(e) => setSelectedHeatPump1(e.target.value)}
          >
            <option value="">Select Heat Pump 1</option>
            {heatPumps.map((heatPump) => (
              <option key={heatPump.id} value={heatPump.id}>
                {heatPump.brand} - {heatPump.model_series}
              </option>
            ))}
          </select>
          <select
            className="dropdown"
            value={selectedHeatPump2}
            onChange={(e) => setSelectedHeatPump2(e.target.value)}
          >
            <option value="">Select Heat Pump 2</option>
            {heatPumps.map((heatPump) => (
              <option key={heatPump.id} value={heatPump.id}>
                {heatPump.brand} - {heatPump.model_series}
              </option>
            ))}
          </select>
        </div>
      </div>
        <Results
          heatPump1={
            selectedHeatPump1
              ? heatPumps.find((heatPump) => heatPump.id === parseInt(selectedHeatPump1))
              : null
          }
          heatPump2={
            selectedHeatPump2
              ? heatPumps.find((heatPump) => heatPump.id === parseInt(selectedHeatPump2))
              : null
          }
        />
    </div>
  );
}

export default CompareHP;