import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import { Home } from "../home/Home"
import CustomComponents from "../common/CustomComponents"

export const Pages = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/results"><CustomComponents /></Route>
                    {/* All the routes go here */}
                </Switch>
            </Router>
        </>
    )
}
