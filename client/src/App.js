import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import ExploreIcon from "@mui/icons-material/Explore";
import EditIcon from "@mui/icons-material/Settings";
import { Home } from "./components/home/Home";
import CustomComponents from './components/common/CustomComponents';
import {Dashboard} from "./components/pages/Dashboard";
import { FAQ } from "./components/pages/FAQ";
import { IntroPage } from "./components/pages/IntroPage";
import { Settings } from "./components/pages/Settings";
import { EnergySavingTips } from "./components/pages/EnergySavingTips";
import { StepPage } from "./components/calculator/StepPage"; 
import Sidebar from './components/common/Sidebar';

function App() {
  return (
    <Router>
      <div style={{ display: "flex"}}>
        <Sidebar />
        {/*       
        <Drawer variant="permanent" anchor="left" style={{ width: '100px' }}>
          <List>
            <ListItem button component={Link} to="/" exact>
              <ListItemIcon><HomeIcon /></ListItemIcon>
            </ListItem>

            <ListItem button component={Link} to="/info">
              <ListItemIcon><InfoIcon /></ListItemIcon>
            </ListItem>

            <ListItem button component={Link} to="/intro">
              <ListItemIcon><ExploreIcon /></ListItemIcon>
            </ListItem>

            <ListItem button component={Link} to="/settings">
              <ListItemIcon><EditIcon /></ListItemIcon>
            </ListItem>

            <ListItem button component={Link} to="/energy-saving-tips">
              <ListItemIcon><SettingsIcon /></ListItemIcon>
            </ListItem>
          </List>
        </Drawer> */}

        {/* Main Content */}
        <div style={{ marginLeft: "0px", flexGrow: 1, marginBottom:300  }}>
          {/* Routing Logic */}
          <Switch>
            <Route path="/" exact component={IntroPage} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/info" component={FAQ} />
            <Route path="/intro" component={IntroPage} />
            <Route path="/settings" component={Settings} />
            <Route path="/energy-saving-tips" component={EnergySavingTips} />
            <Route path="/calculator" component={StepPage} />
            <Route path="/results" component={CustomComponents} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

