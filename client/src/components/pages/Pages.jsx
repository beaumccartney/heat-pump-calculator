import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import { Home } from "../home/Home"

export const Pages = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    {/* All the routes go here */}
                </Switch>
            </Router>
        </>
    )
}