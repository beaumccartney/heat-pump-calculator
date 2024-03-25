import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';

import infoIcon from '../../assets/images/info.png';
import vectorIcon from '../../assets/images/Vector.png';
import decisionIcon from '../../assets/images/Decision.png';

import "../Dashboard.css"

function Cards() {

    const selections = {
        "tracking" : { icon: vectorIcon, description: "How to Track Daily Usage", link: "/tracking"},
        "savings": { icon: infoIcon, description: "Energy Savings Tips", link: "/energy-saving-tips" },
        "questions": { icon: decisionIcon, description: "Frequenty Asked Questions", link: "/info" }
    }

    let history = useHistory();

    const handleClick = (link) => {
      history.push(link);
    };

  return (
    <div className='card-container-info'>
        {Object.keys(selections).map((val, index) => (
            <div className="card-info" key={index} onClick={() => handleClick(selections[val].link)}>
                <img src={selections[val].icon} />
                <p>{selections[val].description}</p>
            </div>             
        ))}
    </div>
  )
}

export default Cards