import React from 'react'
import { useHistory } from 'react-router-dom';

import Profile1 from '../../assets/images/profile1.png'
import Profile2 from '../../assets/images/profile2.png'
import Profile3 from '../../assets/images/profile3.png'
import Profile4 from '../../assets/images/profile4.png'

import "../Dashboard.css"

function CompareHeatPump() {

    const history = useHistory();

    const info = {
        "Find A Heat Pump": {
            description: "Using your housing info & budget, find a suitable heat pump!",
            link: "/search"
        },
        "Compare Heat Pumps": {
            description: "Compare a list of available heat pumps and find a suitable one!",
            link: "/calculator"
        },
    }

    const handleClick = (link) => {
        history.push(link);
    };

return (
    <div className="info-card-container">
        {Object.keys(info).map((val, index) => (
            <div className="info-card-content" key={index} onClick={() => handleClick(info[val].link)}>
                <h2 className="find-card-title">{val}</h2>
                <p className="find-card-description">{info[val].description}</p>

                <div className='review-images'>
                    <img src={Profile1} />
                    <img src={Profile2} />
                    <img src={Profile3} />
                    <img src={Profile4} />
                </div>
            </div>
        ))}
    </div>
  )
}

export default CompareHeatPump
