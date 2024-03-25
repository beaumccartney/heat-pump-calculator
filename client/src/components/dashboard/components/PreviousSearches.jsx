import React, { useState } from 'react'
import { useEffect } from 'react';

import Profile1 from '../../assets/images/profile1.png'

import "../Dashboard.css"

function PreviousSearches() {
    const [searchData, setSearchData] = useState([]);
    useEffect(() => {
        setSearchData([
            { address: '1234 56 Ave NW' },
            { address: '1234 56 Ave NW' },
            { address: '1234 56 Ave NW' }
        ]);
    }, []);

    const SearchItem = ({ address }) => {
        return (
          <li className="search-item">
            <div className='previous-img-address'>
                <img src={Profile1} />
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
                  <SearchItem key={index} address={search.address} />
                ))}
              </ul>
            </div>
          </div>
    </>
  )
}

export default PreviousSearches
