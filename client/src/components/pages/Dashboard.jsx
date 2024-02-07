import React, { useEffect, useState } from "react"
import axios from "axios"

import "../../style/main.scss"
import "./Dashboard.css"
import infoIcon from '../assets/images/info.png';
import vectorIcon from '../assets/images/Vector.png';
import decisionIcon from '../assets/images/Decision.png';
import { Bar } from 'react-chartjs-2';
import { useHistory } from 'react-router-dom';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Dashboard = () => {

  const PreviousSearches = ({ searches }) => {
    return (
      <div>
        <h2 className="previous-searches-title">Previous Heat Pump Searches</h2>
        <div className="previous-searches-box">
          <div className="header-search">
            <h3>{searches.length} Active Searches</h3>
            <button className="view-all">See All Searches</button>
          </div>
          <ul className="search-list">
            {searches.map((search, index) => (
              <SearchItem key={index} address={search.address} />
            ))}
          </ul>
        </div>
      </div>
    );
  };


  const SearchItem = ({ address }) => {
    return (
      <li className="search-item">
        <span className="address">{address}</span>
        <button className="view-report">View Report</button>
      </li>
    );
  };

    const WelcomeBanner = () => {
        return (
          <div className = "heading">
            <h2>Welcome to the Heat Pump Selector</h2>
           Explore & Save Money With The Best Heat Pump For Your Home.
          </div>
        );
      };

      const FindHeatPump = () => {
        let history = useHistory();

        const handleClick = () => {
          history.push('/calculator');
        };
        return (
          <div className="find-card" onClick={handleClick}>
            <div className="find-card-content">
              <h2 className="find-card-title">Find a Heat Pump</h2>
              <p className="find-card-description">Using your housing info & budget, find a suitable heat pump</p>
            </div>
          </div>
        );
      };

      const CompareHeatPump = () => {
        return (
          <div className="find-card">
            <div className="find-card-content">
              <h2 className="find-card-title">Compare Heat Pumps</h2>
              <p className="find-card-description">Compare a list of available heat pumps and find a suitable one</p>
            </div>
          </div>
        );
      };

      const InfoCard = () => {
        let history = useHistory();

        const handleClick = () => {
          history.push('/energy-saving-tips');
        };
        return (
            <div className="info-card" onClick={handleClick}>
            <div className="info-icon">
                <img src={infoIcon} alt="Info" />
            </div>
            <div className="info-text">
                Energy Saving Tips
            </div>
            </div>
        );
        };

        const UsageCard = () => {
          return (
              <div className="faq-card">
              <div className="faq-icon">
                  <img src={vectorIcon} alt="Usage" />
              </div>
              <div className="faq-text">
                  How to Track Daily Usage
              </div>
              </div>
          );
          };

          const FAQCard = () => {
            let history = useHistory();

        const handleClick = () => {
          history.push('/info');
        };
            return (
                <div className="faq-card" onClick={handleClick}>
                <div className="faq-icon">
                    <img src={decisionIcon} alt="FAQ" />
                </div>
                <div className="faq-text">
                    Frequently Asked Questions
                </div>
                </div>
            );
            };

            const EnergySavingsChart = () => {
              const data = {
                labels: ['HEAT PUMP 1', 'HEAT PUMP 2', 'HEAT PUMP 3', 'HEAT PUMP 4'],
                datasets: [
                  {
                    label: 'Energy Savings',
                    data: [12, 19, 3, 5],
                    backgroundColor: 'rgba(0, 123, 255, 0.5)',
                    borderWidth: 1,
                  },
                ],
              };

              const options = {
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              };
             
              return(
                  <div className="chart-container">
                    <Bar data={data} options={options} />
                  </div>
                );
            };


            

            const previousSearchesData = [
              { address: '1234 56 Ave NW' },
              { address: '1234 56 Ave NW' },
              { address: '1234 56 Ave NW' }
            ];


            // Dummy data for the different categories
            const heatPumpData = {
              'Heat Pumps': [
                { model: 'Heat Pump - 3600', price: '$200' },
                { model: 'Heat Pump - 3601', price: '$250' },
                { model: 'Heat Pump - 3602', price: '$300' },
                { model: 'Heat Pump - 3603', price: '$350' },
              ],
              'Energy Efficient': [
                { model: 'Energy Pump - 4600', price: '$220' },
                { model: 'Energy Pump - 4601', price: '$270' },
              ],
              'Electricity Efficient': [
                { model: 'Electric Pump - 5600', price: '$230' },
                { model: 'Electric Pump - 5601', price: '$280' },
              ],
            };

            const TopHeatPumps = () => {
              const [activeTab, setActiveTab] = useState('Heat Pumps');
            
              const handleTabClick = (tab) => {
                setActiveTab(tab);
              };
            
              return (
                <div className="top-heat-pumps">
                  <h2>Top Heat Pumps</h2>
                  <div className="tabs">
                  <button className={`tab ${activeTab === 'Heat Pumps' ? 'active' : ''}`} onClick={() => setActiveTab('Heat Pumps')}>
                    Heat Pumps
                  </button>
                  <button className={`tab ${activeTab === 'Energy Efficient' ? 'active' : ''}`} onClick={() => setActiveTab('Energy Efficient')}>
                    Energy Efficient
                  </button>
                  <button className={`tab ${activeTab === 'Electricity Efficient' ? 'active' : ''}`} onClick={() => setActiveTab('Electricity Efficient')}>
                    Electricity Efficient
                  </button>
                </div>
                  <div className="heat-pump-list">
                    {heatPumpData[activeTab].map((pump, index) => (
                      <div key={index} className="heat-pump-item">
                        <div className="heat-pump-details">
                          <span className="model">{pump.model}</span>
                          <span className="price">{pump.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            };
      

            return (
              <>
                <div className="dashboard">
                  <WelcomeBanner />
                  <div className="card-container">
                    <FindHeatPump />
                    <CompareHeatPump />
                    <div style = {{paddingRight: "20%"}}></div>
                    <UsageCard />
                    <InfoCard />
                    <FAQCard />
                  </div>
                  <div className="data-sections">
                    <div className="left-section">
                      <PreviousSearches searches={previousSearchesData} />
                      <h2>Energy Savings For Different Heat Pumps</h2>
                      <EnergySavingsChart />
                    </div>
                    <div className="right-section">
                      <TopHeatPumps />
                    </div>
                  </div>
                </div>
              </>
            );
            


}

export default Dashboard;