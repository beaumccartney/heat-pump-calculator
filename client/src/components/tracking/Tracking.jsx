import React from 'react';
import "../tracking/Tracking.css";
import heatpump from "../assets/images/tracking.png"

function Tracking({ userName }) {
  return (
    <div className='tracking-container'>
      <div className='content'>
        <div className='heading'>
          <h2>Daily Usage Tracking for Heatpumps</h2>
        </div>
        <div className='below-title-text'>
          <p>Tracking daily usage of your heat pump is essential for maximizing its efficiency, reducing energy costs, and extending its lifespan. 
            By monitoring your system's performance and energy consumption, you can identify opportunities for adjustments and improvements. 
            This page outlines best practices for effectively tracking and analyzing your heat pump's daily usage.
          </p>
        </div>
        <div className="best-practices">
          <h3>Best Practices for Tracking Daily Usage</h3>
          <ol>
            <li>
              <strong>Use Built-in Monitoring Tools:</strong> Many modern heat pumps come with built-in monitoring tools and smart controls. 
              Use these features to access real-time data on energy consumption, performance, and more. If you are unsure, it is best to consult your heat pump documentation or contact
              your provider.
            </li>
            <li>
              <h4>Install Energy Monitoring Devices</h4>
              <ul>
                <li>
                  <strong>Smart Thermostats:</strong> These devices can provide detailed insights into your heat pump’s operation and energy usage. Some models offer features like usage reports and remote monitoring through mobile apps.
                </li>
                <li>
                  <strong>Energy Monitors:</strong> Separate energy monitors can be installed to measure the electricity consumption of your heat pump specifically. These devices can give you a clearer picture of how much energy your system uses daily.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="analyze-data">
          <h4>Analyze the Data</h4>
          <p>Regular analysis of your heat pump's energy consumption data is crucial. Identify patterns and anomalies in daily usage to make informed decisions:</p>
          <ul>
            <li>Review energy consumption trends over time to identify periods of high usage.</li>
            <li>Adjust your heat pump settings based on your daily and seasonal needs to optimize performance.</li>
            <li>Consult with energy management tools or professionals to interpret the data effectively and make necessary adjustments.</li>
          </ul>
        </div>
      </div>
      
      <div className='image-container'>
        <img src= {heatpump} alt="Animated Thermometer" className="animated-thermometer"/>
      </div>
    </div>
  );
}

export default Tracking;
