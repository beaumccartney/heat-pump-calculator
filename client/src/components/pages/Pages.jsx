import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import { Home } from "../home/Home"
import CustomComponents from "../common/CustomComponents"
import Dashboard from "./Dashboard"

export const Pages = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/"><Dashboard /></Route>
                    <Route exact path="/results"><CustomComponents /></Route>
                    <Route exact path="/FAQ"><Home /></Route>
                    <Route exact path="/EnergySavingTips"><Home /></Route>
                </Switch>
            </Router>
        </>
    )
}