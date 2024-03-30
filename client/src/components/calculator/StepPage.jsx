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



    const Card = ({ id, title, dataPoints }) => {
        return (
            <div className="card" id={id}>
                <h2 className="card-title">{title}</h2>
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
        const cardData = [
            {
                id: 'card1',
              title: 'HEAT PUMP #1',
              dataPoints: [
                { label: 'UPFRONT INVESTMENT', value: h1_1, valueWidth: '70%' }, //values will be passed in from backend
                { label: 'COST SAVINGS', value: h1_2, valueWidth: '30%' },
                { label: 'ENERGY USE (GJ/YEAR)', value: h1_3, valueWidth: '50%' },
                { label: 'GHG EMISSIONS (TONNES CO2E/YEAR)', value: h1_4, valueWidth: '40%' },
                // Add more data points as needed
              ],
            },
            {
                id: 'card2',
                title: 'HEAT PUMP #2',
                dataPoints: [
                  { label: 'UPFRONT INVESTMENT', value: h2_1, valueWidth: '70%' },
                  { label: 'COST SAVINGS', value: h2_2, valueWidth: '30%' },
                  { label: 'ENERGY USE (GJ/YEAR)', value: h2_3, valueWidth: '50%' },
                  { label: 'GHG EMISSIONS (TONNES CO2E/YEAR)', value: h2_4, valueWidth: '40%' },
                  // Add more data points as needed
                ],
              },
              {
                id: 'card3',
                title: 'HEAT PUMP #3',
                dataPoints: [
                  { label: 'UPFRONT INVESTMENT', value: h3_1, valueWidth: '70%' },
                  { label: 'COST SAVINGS', value: h3_2, valueWidth: '30%' },
                  { label: 'ENERGY USE (GJ/YEAR)', value: h3_3, valueWidth: '50%' },
                  { label: 'GHG EMISSIONS (TONNES CO2E/YEAR)', value: h3_4, valueWidth: '40%' },
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
        console.log(`Ready for API call: ${hasNecessaryData}`); // Troubleshooting print statement
    
        if (hasNecessaryData) {
            console.log("Preparing to fetch API data...");
            fetchApiData();
        }
    }, [selectedHomeYear, customHomeSize, selectedEfficiency, customEfficiency, efficiencySubmitted]);
    
    const fetchApiData = async () => {
        try {
            const homeSizeAverage = selectedHomeType ? parseHomeSize(selectedHomeType) : parseInt(customHomeSize, 10);
            const inputs = { buildYear: selectedHomeYear, sizeOfHome: homeSizeAverage };
            console.log("API Inputs:", inputs); // Print the inputs for troubleshooting
    
            // Uncomment and use your actual API endpoint and request method
            const response = await axios.post('http://localhost:3001/api/calc', inputs)
            console.log("API Response:", response.data); // Log the API response for debugging
            const parsed = Papa.parse(response.data);


            //Takes from the values and sets them from the first heatpump
            //First index value is to choose the heatpump, second is to choose the values from the heatpump
            setH1_1Data('$ '+Math.round(parsed.data[4][1]));
            setH1_2Data('$ '+Math.round(parsed.data[4][4]));
            setH1_3Data(Math.round(parsed.data[4][5]));
            setH1_4Data(parseFloat(parsed.data[4][6]).toFixed(1));

            //Takes the values and sets them from the second heat pump
            setH2_1Data('$ '+Math.round(parsed.data[6][1]));
            setH2_2Data('$ '+Math.round(parsed.data[6][4]));
            setH2_3Data(Math.round(parsed.data[6][5]));
            setH2_4Data(parseFloat(parsed.data[6][6]).toFixed(1));

            //Takes the values and sets the from the 4th heatpump
            setH3_1Data('$ '+Math.round(parsed.data[10][1]));
            setH3_2Data('$ '+Math.round(parsed.data[10][4]));
            setH3_3Data(Math.round(parsed.data[10][5]));
            setH3_4Data(parseFloat(parsed.data[10][6]).toFixed(1));

            console.log(parsed.data[4][1]);
            console.log(parsed.data[4][4]);
            console.log(parsed.data[4][5]);
            console.log(parsed.data[4][6]);
    
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
                            <div className="option-efficiency" onClick={() => handleEfficiencySelect("80%")}>
                                <div className="label-efficiency">80%</div>
                            </div>
                            <div className="option-efficiency" onClick={() => handleEfficiencySelect("92%")}>
                                <div className="label-efficiency">92%</div>
                            </div>
                            <div className="option-efficiency" onClick={() => handleEfficiencySelect("97%")}>
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

