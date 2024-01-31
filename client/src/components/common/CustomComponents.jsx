import React from 'react';
import './CustomComponents.css'; // Import the CSS styles

const CustomComponents = () => {
    const handleCardClick = () => {
        let cardStack = document.getElementById('cardStack');
        let firstCard = cardStack.children[0];
        cardStack.appendChild(firstCard);

        // Adjust z-index for each card
        for (let i = 0; i < cardStack.children.length; i++) {
            cardStack.children[i].style.zIndex = cardStack.children.length - i;
        }
    };

    return (
        <div>
            {/* Card Stack Component
            <div id="cardStack" className="card-stack" onClick={handleCardClick}>
                <div className="card" id="card1">Card 1</div>
                <div className="card" id="card2">Card 2</div>
                <div className="card" id="card3">Card 3</div>
            </div> */}

            {/* Items and Rectangles */}
            <div className="container">
                <h1>Results</h1>
                <div className="item">Home Type <div className="rectangle"><span>Text 1</span></div></div>
                <div className="item">Home Year <div className="rectangle"><span>Text 2</span></div></div>
                <div className="item">Consumption <div className="rectangle"><span>Text 3</span></div></div>
            </div>
        </div>
    );
};

export default CustomComponents;
