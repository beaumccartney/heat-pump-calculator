import React, { useState } from 'react';

import { MdDashboard } from "react-icons/md";
import { TbDatabaseSearch } from "react-icons/tb";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

import './Sidebar.css'; 
import { Link } from 'react-router-dom';

function Sidebar() {

  const [activetab, setActiveTab] = useState("dashboard");
  const tabs = {
    "dashboard": <MdDashboard />,
    "search": <TbDatabaseSearch />,
    "chat": <IoChatboxEllipses />,
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className='sidebar'>
      <div className='first-selections'>
        {Object.keys(tabs).map((val) => (
          <Link to={`/${val}`} onClick={() => handleTabChange(val)} className={activetab == val ? `active` : ""}>
            {tabs[val]}
          </Link>
        ))}
      </div>
        <Link to={'/settings'} onClick={() => handleTabChange("settings")} className={activetab == "settings" ? "active" : ""}>
          <IoSettingsSharp />
        </Link>
    </div>
  );
}

export default Sidebar;