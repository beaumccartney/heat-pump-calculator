import React, { useState } from 'react';
import { useEffect } from 'react';
import "../Dashboard.css";
// Import the images dynamically
const images = [
  require('../../assets/images/profile1.png'),
  require('../../assets/images/profile2.png'),
  require('../../assets/images/profile3.png'),
  require('../../assets/images/profile4.png')
];

function PreviousSearches() {
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        setSearchData([
            { address: 'Ahmed Abbas' },
            { address: 'Beau McCartney' },
            { address: 'Liam Parmar' },
            { address: 'Sid Menon' },
        ]);
    }, []);

    const SearchItem = ({ address, picture }) => {
        return (
          <li className="search-item">
            <div className='previous-img-address'>
                {/* Use the imported images array */}
                <img src={picture} alt="Profile" />
                <span className="address">{address}</span>
            </div>
            <button className="view-report">View Report</button>
          </li>
        );
    };

    return (
        <>
            <div>
                <h2 className="previous-searches-title">Previous Heat Pump Searches</h2>
                <div className="previous-searches-box">
                    <div className="header-search">
                        <h3>{searchData && searchData?.length} Active Searches</h3>
                        <button className="view-all">See All Searches</button>
                    </div>
                    <ul className="search-list">
                        {searchData && searchData?.map((search, index) => (
                            <SearchItem key={index} address={search.address} picture={images[index]} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PreviousSearches;
