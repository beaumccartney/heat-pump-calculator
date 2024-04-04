import React from 'react';
import './CustomComponents.css'; // Import the CSS styles
import image1 from '../assets/images/faq.png'; // Update with the correct path
import image2 from '../assets/images/est.png'; // Update with the correct path
import image3 from '../assets/images/dailyusage.png'; // Update with the correct path
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { useHistory, useLocation } from "react-router-dom";

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



const CustomComponents = () => {
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
            { label: 'UPFRONT INVESTMENT', value: '$7,500', valueWidth: '70%' }, //values will be passed in from backend
            { label: 'COST SAVINGS', value: '$2,293', valueWidth: '30%' },
            { label: 'ENERGY USE (GJ/YEAR)', value: '75', valueWidth: '50%' },
            { label: 'GHG EMISSIONS (TONNES CO2E/YEAR)', value: '4.1', valueWidth: '40%' },
            // Add more data points as needed
          ],
        },
        {
            id: 'card2',
            title: 'HEAT PUMP #2',
            dataPoints: [
              { label: 'UPFRONT INVESTMENT', value: '$7,500', valueWidth: '70%' },
              { label: 'COST SAVINGS', value: '$2,293', valueWidth: '30%' },
              { label: 'ENERGY USE (GJ/YEAR)', value: '75', valueWidth: '50%' },
              { label: 'GHG EMISSIONS (TONNES CO2E/YEAR)', value: '4.1', valueWidth: '40%' },
              // Add more data points as needed
            ],
          },
          {
            id: 'card3',
            title: 'HEAT PUMP #3',
            dataPoints: [
              { label: 'UPFRONT INVESTMENT', value: '$7,500', valueWidth: '70%' },
              { label: 'COST SAVINGS', value: '$2,293', valueWidth: '30%' },
              { label: 'ENERGY USE (GJ/YEAR)', value: '75', valueWidth: '50%' },
              { label: 'GHG EMISSIONS (TONNES CO2E/YEAR)', value: '4.1', valueWidth: '40%' },
              // Add more data points as needed
            ],
          },
        // Add more cards as needed
    ];
    
    const location = useLocation();
    console.log(location.state.selectedHomeType);
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
                <div className="item-container">
                    <div className="item">Home Type</div>
                    <div className="rectangle"><span>{location.state.selectedHomeType}</span></div>
                </div>
                <div className="item-container">
                    <div className="item">Home Year</div>
                    <div className="rectangle"><span>{location.state.selectedHomeYear}</span></div>
                </div>
                <div className="item-container">
                    <div className="item">Consumption</div>
                    <div className="rectangle"><span>{location.state.selectedEfficiency}</span></div>
                </div>

            </div>

            {/* Image Links */}
            <div className="image-buttons">
                <a href="http://example-link-1.com" target="_blank" rel="noopener noreferrer">
                    <button style={{ backgroundImage: `url(${image1})` }}></button>
                </a>
                <a href="http://example-link-2.com" target="_blank" rel="noopener noreferrer">
                    <button style={{ backgroundImage: `url(${image2})` }}></button>
                </a>
                <a href="http://example-link-3.com" target="_blank" rel="noopener noreferrer">
                    <button style={{ backgroundImage: `url(${image3})` }}></button>
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
};

export default CustomComponents;
