import React, { useState,useEffect } from "react";
import { StepSidebar, SelectionForm, OptionCard, NextStep } from "./StepComponents"; // Adjust the import path as needed
import "../../style/main.scss";
import "./Calculator.css";
import mansionImage from "../assets/images/Mansion.png";
import houseImage from "../assets/images/House.png";
import condoImage from "../assets/images/Condo.png";
import infoIcon from '../assets/images/est.png';
import vectorIcon from '../assets/images/dailyusage.png';
import decisionIcon from '../assets/images/faq.png';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import axios from 'axios';
import Papa from 'papaparse';


export const StepPage = () => {
    const [apiData, setApiData] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedHomeType, setSelectedHomeType] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [customHomeSize, setCustomHomeSize] = useState('');
    const [selectedHomeYear, setSelectedHomeYear] = useState(null);
    const [selectedEfficiency, setSelectedEfficiency] = useState(null);
    const [customEfficiency, setCustomEfficiency] = useState('');
    const [efficiencySubmitted, setEfficiencySubmitted] = useState(false);
    const [selectedOption, setSelectedOption] = useState('option1');

    //Saved values for the all the heatpumps
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

    let widthh1_1 = 0;


    const Card = ({ id, title, dataPoints,  }) => {
        const handleDropdownClick = (event) => {
            event.stopPropagation();
        };

        const handleDropdownChange = (event) => {
            setSelectedOption(event.target.value);
            console.log(selectedOption);
        };
    
        return (
            <div className="card" id={id}>
                <div className="card-header">
                    <h2 className="card-title">{title}</h2>
                    <select className="card-dropdown" value = {selectedOption} onClick={handleDropdownClick} onChange={handleDropdownChange}>
                        <option value="option1"> 1 - Existing Heating/Cooling System</option>
                        <option value="option2">2 - High Efficiency Furnace</option>
                        <option value="option3">3 - Heat Pump and Backup HEF</option>
                        <option value="option4">4 - Heat Pump, Backup HEF, and Solar PV</option>
                        <option value="option5">5 - Optimized Cost Savings For Option 3</option>
                        <option value="option6">6 - Optimized Cost Savings For Option 4</option>
                    </select>
                </div>
                {dataPoints.map((point, index) => (
                    <div key={index} className="data-point">
                        <label className="data-label">{point.label}</label>
                        <div className="data-bar-container">
                            <div className="data-bar" style={{ width: point.valueWidth }}></div>
                            <span className="data-value">{point.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    
    
    
   
        const downloadPdf = () => {
            html2canvas(document.body).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save("download.pdf");
            });
        }
        const handleCardClick = () => {
            let cardStack = document.getElementById('cardStack');
            let firstCard = cardStack.children[0];
            cardStack.appendChild(firstCard);
    
            // Adjust z-index for each card
            for (let i = 0; i < cardStack.children.length; i++) {
                cardStack.children[i].style.zIndex = cardStack.children.length - i;
            }
        };

        const calculateWidthBasedOnValue = (value, maxValue) => {
            if (value == null || value < 0)
                value = 0;
            const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''));
            let widthPercentage = (numericValue / maxValue) * 100;
            widthPercentage += 10;
            const boundedWidth = Math.min(Math.max(widthPercentage, 0), 100);
            
            return `${boundedWidth}%`; // Convert to a string suitable for CSS // Convert to a percentage of the max value
        };

        const cardData = [
            {
                id: 'card1',
              title: 'HEAT PUMP #1',
              dataPoints: [
                { label: 'UPFRONT INVESTMENT', value: h1_1, valueWidth: calculateWidthBasedOnValue (h1_1, 22000) }, //values will be passed in from backend
                { label: 'ANNUAL ENERGY COSTS', value: h1_2, valueWidth: calculateWidthBasedOnValue (h1_2, 8000) },
                { label: 'ENERGY USE (GJ/YEAR)', value: h1_3, valueWidth: calculateWidthBasedOnValue (h1_3, 370) },
                { label: 'GHG EMISSIONS (TONNES CO2E/YEAR)', value: h1_4, valueWidth: calculateWidthBasedOnValue (h1_4, 20) },
                // Add more data points as needed
              ],
            },
            {
                id: 'card2',
                title: 'HEAT PUMP #2',
                dataPoints: [
                  { label: 'UPFRONT INVESTMENT', value: h2_1, valueWidth: calculateWidthBasedOnValue (h2_1, 22000) },
                  { label: 'ANNUAL ENERGY COSTS', value: h2_2, valueWidth: calculateWidthBasedOnValue (h1_2, 8000) },
                  { label: 'ENERGY USE (GJ/YEAR)', value: h2_3, valueWidth: calculateWidthBasedOnValue (h2_3, 370) },
                  { label: 'GHG EMISSIONS (TONNES CO2E/YEAR)', value: h2_4, valueWidth: calculateWidthBasedOnValue (h2_4, 20) },
                  // Add more data points as needed
                ],
              },
              {
                id: 'card3',
                title: 'HEAT PUMP #3',
                dataPoints: [
                  { label: 'UPFRONT INVESTMENT', value: h3_1, valueWidth: calculateWidthBasedOnValue (h3_1, 22000) },
                  { label: 'ANNUAL ENERGY COSTS', value: h3_2, valueWidth: calculateWidthBasedOnValue (h1_2, 8000) },
                  { label: 'ENERGY USE (GJ/YEAR)', value: h3_3, valueWidth: calculateWidthBasedOnValue (h3_3, 370) },
                  { label: 'GHG EMISSIONS (TONNES CO2E/YEAR)', value: h3_4, valueWidth: calculateWidthBasedOnValue (h3_4, 20) },
                  // Add more data points as needed
                ],
              },
            // Add more cards as needed
        ];
        
    // Function to handle the selection of an efficiency percentage
    const handleEfficiencySelect = (efficiency) => {
        console.log(efficiency);
        setSelectedEfficiency(efficiency);
        // Potentially move to the next step or handle the efficiency selection
        setCurrentStep(currentStep + 1);
    };

    const handleCustomEfficiencySubmit = () => {
        if (customEfficiency) {
            // Reset selected home type
            setSelectedEfficiency(null);
            setEfficiencySubmitted(true);
            // Move to the next step
            setCurrentStep(currentStep + 1);
        }
    };


    const handleCustomHomeSizeSubmit = () => {
        if (customHomeSize) {
            // Reset selected home type
            setSelectedHomeType(null);
            setSubmitted(true);
            // Move to the next step
            setCurrentStep(currentStep + 1);
        }
    };

    const handleHomeYearSelect = (yearRange) => {
        console.log(yearRange);
        setSelectedHomeYear(yearRange);
        // Potentially move to the next step or handle the year range selection
        setCurrentStep(currentStep + 1);
    };


    // Function to handle the selection of a home type
    const handleHomeTypeSelect = (type) => {
        console.log(type);
        setSelectedHomeType(type);
        // Set the next step or navigate to a new page/component
        // For example, incrementing the current step:
        setCustomHomeSize('');
        setCurrentStep(currentStep + 1);
    };

    const parseHomeSize = (homeType) => {
        const sizePattern = /\((\d+) - (\d+) SQFT\)/;
        const match = homeType.match(sizePattern);
        if (match) {
            const size1 = parseInt(match[1], 10);
            const size2 = parseInt(match[2], 10);
            return (size1 + size2) / 2; // Returns the average size
        }
        return 0; // Return a default or error value if parsing fails
    };
    
    useEffect(() => {
        // Check if the necessary conditions are met before fetching API data
        const hasNecessaryData = selectedHomeYear && ((selectedHomeType && !customHomeSize) || (!selectedHomeType && customHomeSize)) && (selectedEfficiency || (customEfficiency && efficiencySubmitted));    
        if (hasNecessaryData) {
            console.log(selectedOption);
            fetchApiData();
        }
    }, [selectedHomeYear, customHomeSize, selectedEfficiency, customEfficiency, efficiencySubmitted, selectedOption]);
    
    const fetchApiData = async () => {
        try {
            const homeSizeAverage = selectedHomeType ? parseHomeSize(selectedHomeType) : parseInt(customHomeSize, 10);
            const inputs1 = { buildYear: selectedHomeYear, sizeOfHome: homeSizeAverage, 
                existingFurnaceEfficiency: selectedEfficiency, heatPumpSelector: 'Unit 1'};
            //console.log("API Inputs:", inputs1); // Print the inputs for troubleshooting
    
            // Uncomment and use your actual API endpoint and request method
            const response1 = await axios.post('http://localhost:3001/api/calc', inputs1)
            //console.log("API Response:", response1); // Log the API response for debugging
            const parsed1 = Papa.parse(response1.data);

            let index = 0;
            let find = 0;
            if (selectedOption == 'option1'){
                index = 2;
                find = 0;
            }

            if (selectedOption == 'option2'){
                index = 4;
                find = 0;
            }

            if (selectedOption == 'option3'){
                index = 6;
                find = 0;
            }

            if (selectedOption == 'option4'){
                index = 8;
                find = 2;
            }

            if (selectedOption == 'option5'){
                index = 10;
                find = 0;
            }

            if (selectedOption == 'option6'){
                index = 12;
                find = 2;
            }

            //Takes from the values and sets them from the first heatpump
            //First index value is to choose the heatpump, second is to choose the values from the heatpump
            setH1_1Data('$ '+Math.round(parsed1.data[index][1+find]));
            setH1_2Data('$ '+Math.round(Math.abs((parsed1.data[index][4+find]))));
            setH1_3Data(Math.round(parsed1.data[index][5+find]));
            setH1_4Data(parseFloat(parsed1.data[index][6+find]).toFixed(1));

            const inputs2 = { buildYear: selectedHomeYear, sizeOfHome: homeSizeAverage, 
                existingFurnaceEfficiency: selectedEfficiency, heatPumpSelector: 'Unit 3'};
            //console.log("API Inputs:", inputs2); // Print the inputs for troubleshooting
    
            // Uncomment and use your actual API endpoint and request method
            const response2 = await axios.post('http://localhost:3001/api/calc', inputs2)
            //console.log("API Response:", response2.data); // Log the API response for debugging
            const parsed2 = Papa.parse(response2.data);

            //Takes the values and sets them from the second heat pump
            setH2_1Data('$ '+Math.round(parsed2.data[index][1+find]));
            setH2_2Data('$ '+Math.round(Math.abs((parsed2.data[index][4+find]))));
            setH2_3Data(Math.round(parsed2.data[index][5+find]));
            setH2_4Data(parseFloat(parsed2.data[index][6+find]).toFixed(1));

            const inputs3 = { buildYear: selectedHomeYear, sizeOfHome: homeSizeAverage, 
                existingFurnaceEfficiency: selectedEfficiency, heatPumpSelector: 'Unit 5'};
            //console.log("API Inputs:", inputs3); // Print the inputs for troubleshooting
    
            // Uncomment and use your actual API endpoint and request method
            const response3 = await axios.post('http://localhost:3001/api/calc', inputs3)
            //console.log("API Response:", response3.data); // Log the API response for debugging
            const parsed3 = Papa.parse(response3.data);

            //Takes the values and sets them from the second heat pump
            setH3_1Data('$ '+Math.round(parsed3.data[index][1+find]));
            setH3_2Data('$ '+Math.round(Math.abs((parsed3.data[index][4+find]))));
            setH3_3Data(Math.round(parsed3.data[index][5+find]));
            setH3_4Data(parseFloat(parsed3.data[index][6+find]).toFixed(1));
    
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    
    if (selectedEfficiency || (customEfficiency && efficiencySubmitted === true)) {
        return (
            <div>
                <header>
                    <h1>Results</h1>
                </header>
                <div id="cardStack" className="card-stack" onClick={handleCardClick}>
                    {cardData.map((card, index) => (
                        <Card key={card.id} id={card.id} title={card.title} dataPoints={card.dataPoints} />
                    ))}
                </div>
    
                {/* Items and Rectangles */}
                <div className="container">
                    {selectedHomeType ?  
                    (
                        <div className="item-container">
                            <div className="item">Home Type</div>
                            <div className="rectangle"><span style = {{fontSize: "24px"}}>{selectedHomeType}</span></div>
                        </div> 
                    )
                    :  
                    (
                        <div className="item-container">
                            <div className="item">Home Type</div>
                            <div className="rectangle"><span style = {{fontSize: "24px"}}>{"Custom Size: " + customHomeSize}</span></div>
                        </div>
                    )
                    }
                    <div className="item-container">
                        <div className="item">Home Year</div>
                        <div className="rectangle"><span style = {{fontSize: "24px"}}>{selectedHomeYear}</span></div>
                    </div>
                    {selectedEfficiency ? 
                    (
                        <div className="item-container">
                            <div className="item">Consumption</div>
                            <div className="rectangle"><span style = {{fontSize: "24px"}}>{selectedEfficiency}</span></div>
                        </div>
                    ) 
                    : 
                    (
                        <div className="item-container">
                            <div className="item">Consumption</div>
                            <div className="rectangle"><span style = {{fontSize: "24px"}}>{customEfficiency}</span></div>
                        </div>
                    )
                    }
                </div>
    
                {/* Image Links */}
                <div className="image-buttons">
                    <a href="/" rel="noopener noreferrer">
                        <button style={{ backgroundImage: `url(${vectorIcon})` }}></button>
                    </a>
                    <a href="/energy-saving-tips" rel="noopener noreferrer">
                        <button style={{ backgroundImage: `url(${infoIcon})` }}></button>
                    </a>
                    <a href="/info" rel="noopener noreferrer">
                        <button style={{ backgroundImage: `url(${decisionIcon})` }}></button>
                    </a>
                </div>
                <div>
                {/* Rest of your component */}
                
                    <button 
                        onClick={downloadPdf} 
                        style={{
                            position: 'fixed',
                            top: '10px',
                            right: '100px',
                            zIndex: 1000
                        }}
                    >
                        Download as PDF
                    </button>
                </div>
            </div>
        );
    }

    if (selectedHomeYear) {
        // Handle the selected year range (e.g., navigate to a new component or change state)
        // This is just a placeholder for your logic
        return (
            <div className="home-type-selection">
                <div className="title">
                    <h2>Furnace Efficiency</h2>
                    Select The Electricity & Gas Consumption
                </div>
                
                <div className="page-container">
                    <div className="steps-sidebar">
                        <div className="step-container">
                            <div className="step active"><span>1</span></div>
                            <div className="step-label">Home Type</div>
                        </div>
                        <div className="connector"></div>
                        <div className="step-container">
                            <div className="step active"><span>2</span></div>
                            <div className="step-label">Home Year</div>
                        </div>
                        <div className="connector"></div>
                        <div className="step-container-consumption">
                            <div className="step"><span>3</span></div> {/* Step 3 is now active */}
                            <div className="step-label">Consumption</div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="options">
                            <div className="option-efficiency" onClick={() => handleEfficiencySelect(0.8)}>
                                <div className="label-efficiency">80%</div>
                            </div>
                            <div className="option-efficiency" onClick={() => handleEfficiencySelect(0.92)}>
                                <div className="label-efficiency">92%</div>
                            </div>
                            <div className="option-efficiency" onClick={() => handleEfficiencySelect(0.97)}>
                                <div className="label-efficiency">97%</div>
                            </div>
                        </div>
                        <div className="custom-size">
                            <label htmlFor="customEfficiency">CUSTOM EFFICIENCY:</label>
                            <input
                                type="text"
                                id="customEfficiency"
                                name="customEfficiency"
                                value={customEfficiency} // Corrected from customHomeSize to customEfficiency
                                onChange={(event) => setCustomEfficiency(event.target.value)}
                                placeholder="Enter custom efficiency"
                            />

                            <button onClick={handleCustomEfficiencySubmit}>Submit</button> {/* Update the handler function accordingly */}
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    if (selectedHomeType || (customHomeSize && submitted === true)) {
        // Conditional content based on selection or custom size input
        // ...

        // For demonstration, we're just returning a placeholder message
        return (
            <div className="home-type-selection">
            <div className="title">
                <h2>House Year Selection</h2>
                Select The Year Your House Was Built.
            </div>
            
            <div className="page-container">
                <div className="steps-sidebar">
                        <div className="step-container">
                            <div className="step active"><span>1</span></div>
                            <div className="step-label">Home Type</div>
                        </div>
                        <div className="connector"></div>
                        <div className="step-container">
                            <div className="step"><span>2</span></div>
                            <div className="step-label">Home Year</div>
                        </div>
                        <div className="connector"></div>
                        <div className="step-container-consumption">
                            <div className="step"><span>3</span></div>
                            <div className="step-label">Consumption</div>
                        </div>
                </div>
                <div className="content">
                    <div className="options"> {/* First group of four */}
                        {[
                        "<1949",
                        "1950-1959",
                        "1960-1981",
                        "1982-1990"
                        ].map((range) => (
                        <div key={range} className="option-year" onClick={() => handleHomeYearSelect(range)}>
                            <div className="label-year">{range}</div>
                        </div>
                        ))}
                    </div>
                    <div className="options"> {/* Second group of four */}
                        {[
                        "1991-1997",
                        "1998-2006",
                        "2007-2014",
                        "2015-present"
                        ].map((range) => (
                        <div key={range} className="option-year" onClick={() => handleHomeYearSelect(range)}>
                            <div className="label-year">{range}</div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        );
    }
    
    return (
        <div className="home-type-selection">
            <div className="title">
                <h2>House Type Selection</h2>
                Explore & Save Money With The Best Heat Pump For Your Home.
            </div>
            
            <div className="page-container">
                <div className="steps-sidebar">
                    <div className="step-container">
                        <div className="step"><span>1</span></div>
                        <div className="step-label">Home Type</div>
                    </div>
                    <div className="connector"></div>
                    <div className="step-container">
                        <div className="step"><span>2</span></div>
                        <div className="step-label">Home Year</div>
                    </div>
                    <div className="connector"></div>
                    <div className="step-container-consumption">
                        <div className="step"><span>3</span></div> 
                        <div className="step-label">Consumption</div>
                    </div>
                </div>
                <div className="content">
                    <div className="options">
                        <div className="option" onClick={() => handleHomeTypeSelect("Mansion (3000 - 4000 SQFT)")}>
                            <img src={mansionImage} alt="Mansion" className="image"/>
                            <div className="label">MANSION</div>
                            <div className="size">3000 - 4000 SQFT</div>
                        </div>
                        <div className="option" onClick={() => handleHomeTypeSelect("House (2000 - 2400 SQFT)")}>
                            <img src={houseImage} alt="House" className="image"/>
                            <div className="label">HOUSE</div>
                            <div className="size">2000 - 2400 SQFT</div>
                        </div>
                        <div className="option" onClick={() => handleHomeTypeSelect("Condo (800 - 1200 SQFT)")}>
                            <img src={condoImage} alt="Condo" className="image"/>
                            <div className="label">CONDO</div>
                            <div className="size">800 - 1200 SQFT</div>
                        </div>
                        </div>
                        <div className="custom-size">
                        <label htmlFor="customSize">CUSTOM HOME SIZE:</label>
                        <input
                            type="text"
                            id="customSize"
                            name="customSize"
                            value={customHomeSize}
                            onChange={(event) => setCustomHomeSize(event.target.value)}
                            placeholder="Enter custom size"
                        />
                        <button onClick={handleCustomHomeSizeSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>


    );
};



    );
};

