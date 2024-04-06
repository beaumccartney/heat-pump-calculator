import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Modal, Box, Typography } from "@mui/material";
import "./Results.css";
import axios from "axios";
import Papa from "papaparse";

function Results() {

  const [h1_1, setH1_1Data] = useState(null);
  const [h1_2, setH1_2Data] = useState(null);
  const [h1_3, setH1_3Data] = useState(null);
  const [h1_4, setH1_4Data] = useState(null);

  const [h2_1, setH2_1Data] = useState(null);
  const [h2_2, setH2_2Data] = useState(null);
  const [h2_3, setH2_3Data] = useState(null);
  const [h2_4, setH2_4Data] = useState(null);

  const [h3_1, setH3_1Data] = useState(null);
  const [h3_2, setH3_2Data] = useState(null);
  const [h3_3, setH3_3Data] = useState(null);
  const [h3_4, setH3_4Data] = useState(null);


  const Results = {
    "Existing Heating/Cooling System": {
      desc: "Your Current Heating/Cooling System",
      cost: 'N/A',
      breakdown: [h1_2, h1_3, h1_4],
      details: "Heating, Ventilation, and Air Conditioning (HVAC) systems are essential for maintaining comfortable temperatures and good air quality in homes and buildings. They consist of heating units like furnaces or heat pumps that warm up the space, cooling units like air conditioners that keep the environment cool, and ventilation systems that ensure fresh air circulation, removing stale air and maintaining healthy indoor air quality. These systems are controlled by thermostats, which allow users to set their desired temperature. Modern HVAC systems can be integrated, combining heating, cooling, and ventilation for efficient operation, and often include smart technology for better control and energy savings. Essentially, HVAC systems make our living and working environments more comfortable, regardless of the outdoor weather conditions."
    },
    "High Efficiency Furnace With No Backup": {
      desc: "Not Optimized for Cost Savings",
      cost: h2_1,
      breakdown: [h2_2, h2_3, h2_4],
      details: "A high-efficiency furnace, often referred to as a condensing furnace, is designed to provide heating for a space with minimal energy waste, operating at efficiency levels of 90% or higher. Unlike traditional furnaces that might operate at around 80% efficiency or less, high-efficiency models achieve superior performance by using a second heat exchanger to capture heat from the exhaust gases that would otherwise be vented outside. This process not only conserves energy but also reduces heating costs and carbon footprint."
    },
    "Heat Pump and Backup High Efficiency Furnace": {
      desc: "Optimized for Cost Savings",
      cost: h3_1,
      breakdown: [h3_2, h3_3, h3_4],
      details: "A heat pump paired with a backup high-efficiency furnace offers a versatile and energy-efficient solution for year-round indoor comfort, seamlessly providing both heating and cooling to a home. Heat pumps work by transferring heat from the outside air (even in cold temperatures) into your home during the winter and reversing the process in the summer to cool your home. They are highly efficient because they move heat rather than generate it directly, making them more energy-efficient and cost-effective for moderate climates."
    },
  };

  const [openModal, setOpenModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);
  const [resultsData, setResultsData] = useState({});


  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const sizeOfHome = parseInt(queryParams.get('sizeOfHome'));
        const buildYear = queryParams.get('buildYear').toLowerCase();

        const inputEfficiency = queryParams.get('existingFurnaceEfficiency');

        const existingFurnaceEfficiency = inputEfficiency === "I don't know" // if the user input "I don't know" don't attempt to parse the floast
          ? inputEfficiency : parseFloat(inputEfficiency) / 100;

        console.log(sizeOfHome, buildYear, existingFurnaceEfficiency)
        const inputs1 = {
          buildYear,
          sizeOfHome,
          existingFurnaceEfficiency,
          heatPumpSelector: "Unit 1",
        };

        const inputs2 = {
          buildYear,
          sizeOfHome,
          existingFurnaceEfficiency,
          heatPumpSelector: "Unit 1",
        };

        const inputs3 = {
          buildYear,
          sizeOfHome,
          existingFurnaceEfficiency,
          heatPumpSelector: "Unit 1",
        };

        console.log(inputs1);
        const response1 = await axios.post(
          "http://localhost:3001/api/calc",
          inputs1
        );
        console.log(inputs2);
        const response2 = await axios.post(
          "http://localhost:3001/api/calc",
          inputs2
        );
        console.log(inputs3);
        const response3 = await axios.post(
          "http://localhost:3001/api/calc",
          inputs3
        );
        //Api call for 1st heat pump
        const results1 = Papa.parse(response1.data);
        console.log('Api Response: ', results1);
        console.log(results1.data[4][1]);
        console.log(typeof results1.data[4][4]);
        setH1_1Data('$'+parseFloat(results1.data[1][1]));//dont chnage
        setH1_2Data('$'+ parseFloat(results1.data[1][4]).toFixed(0));
        setH1_3Data(parseFloat(results1.data[1][5]).toFixed(0));
        setH1_4Data(parseFloat(results1.data[1][6]).toFixed(1));

        //Api call for 2nd heat pump
        const results2 = Papa.parse(response2.data);
        setH2_1Data('$'+parseFloat(results2.data[2][1]));//dont chnage
        setH2_2Data('$'+ parseFloat(results2.data[2][4]).toFixed(0));
        setH2_3Data(parseFloat(results2.data[2][5]).toFixed(0));
        setH2_4Data(parseFloat(results2.data[2][6]).toFixed(1));
        //console.log('Api Response: ', results2);

        //Api call for 3rd heat pump
        const results3 = Papa.parse(response3.data);
        //console.log('Api Response: ', results3);
        setH3_1Data('$'+parseFloat(results3.data[5][1]));//dont chnage
        setH3_2Data('$'+ parseFloat(results3.data[5][4]).toFixed(0));
        setH3_3Data(parseFloat(results3.data[5][5]).toFixed(0));
        setH3_4Data(parseFloat(results3.data[5][6]).toFixed(1));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location.search]);

  const handleOpenModal = (result) => {
    setSelectedResult(result);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="results-page">
      <div className="header">
        <div className="results-title">Full Heat Pump Comparison</div>
        <div className="description">
          Based on our research, a{" "}
          <span className="bold">standard heat pump with electric backup</span>{" "}
          is the lowest-cost solution for{" "}
          <span className="bold">a single house</span> heating and cooling in{" "}
          <span className="bold">Calgary</span> built in{" "}
          <span className="bold">1968</span>.
        </div>
      </div>
      <div className="comparisons">
        {Object.keys(Results).map((val, index) => (
          <div className="results-card" key={index}>
            <div className="results-card-content">
              <div className="content-title">{val}</div>
              <div className="content-desc">{Results[val].desc}</div>
              <div className="content-cost">
                <div className="cost-desc">Upfront Investment</div>
                <div className="cost-amt">{Results[val].cost}</div>
              </div>
              <div className="cost-breakdown">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: ".5rem",
                  }}
                >
                  <span className="cost-breakdown-title">Cost breakdown</span>
                  {Results[val].breakdown.map((item, i) => (
                    i == 0 ?
                    <span className="cost-breakdown-span" key={i}>
                      <span
                        className="money-value-title"
                        style={{
                          width: `${
                            parseInt(item?.replace("$", "")?.replace(",", "")) /
                            20
                          }px`,
                          backgroundColor:
                            parseInt(item?.replace("$", "")?.replace(",", "")) <
                            1000
                              ? "#ccffcc"
                              : "#ffcccc",
                          overflow: "visible",
                          whiteSpace: "nowrap",
                          display: "inline-block",
                        }}
                      >
                        {i === 0
                          ? "Annual Energy Costs"
                          : i === 1
                          ? "Energy Use (GJ/year)"
                          : "GHG Emissions (tonnes CO2e/year)"}
                      </span>
                      <span>{item}</span>
                    </span>
                    :
                    i == 1 ?
                    <span className="cost-breakdown-span" key={i}>
                      <span
                        className="money-value-title"
                        style={{
                          width: `${
                            parseInt(item?.replace("$", "")?.replace(",", "")) /
                            0.485
                          }px`,
                          backgroundColor:
                            parseInt(item?.replace("$", "")?.replace(",", "")) <
                            60
                              ? "#ccffcc"
                              : "#ffcccc",
                          overflow: "visible",
                          whiteSpace: "nowrap",
                          display: "inline-block",
                        }}
                      >
                        {i === 0
                          ? "Annual Energy Costs"
                          : i === 1
                          ? "Energy Use (GJ/year)"
                          : "GHG Emissions (tonnes CO2e/year)"}
                      </span>
                      <span>{item}</span>
                    </span>
                    :
              
                    <span className="cost-breakdown-span" key={i}>
                      <span
                        className="money-value-title"
                        style={{
                          width: `${
                            parseInt(item?.replace("$", "")?.replace(",", "")) /
                            0.0295
                          }px`,
                          backgroundColor:
                            parseInt(item?.replace("$", "")?.replace(",", "")) <
                            3
                              ? "#ccffcc"
                              : "#ffcccc",
                          overflow: "visible",
                          whiteSpace: "nowrap",
                          display: "inline-block",
                        }}
                      >
                        {i === 0
                          ? "Annual Energy Costs"
                          : i === 1
                          ? "Energy Use (GJ/year)"
                          : "GHG Emissions (tonnes CO2e/year)"}
                      </span>
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
              <Button
                variant="outlined"
                onClick={() => handleOpenModal(val)}
                sx={{
                  marginTop: "3rem",
                  borderRadius: "20px",
                  backgroundColor: "blue",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "900",
                  padding: ".5rem",
                }}
              >
                Details
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            spacing: 2
          }}
        >
          <Button
            onClick={handleCloseModal}
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            Close
          </Button>
          <Typography fontWeight={'bold'} variant="h6" component="h2" sx={ {mb: theme => theme.spacing(2) }}>
            {selectedResult}
          </Typography>
          <Typography variant="body1" component="div">
            {Results[selectedResult]?.details}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Results;
