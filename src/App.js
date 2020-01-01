import React from "react"
import NavigationMenu from "./components/NavigationMenu"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom"
import Home from "./components/Home"
import Resume from "./components/Resume"
import Films from "./components/Films"
import Music from "./components/Music"

function App() {
    return (
        <Router>
            <NavigationMenu />
            <Switch>
                <Route path="/resume">
                    <Resume />
                </Route>
                <Route path="/contact">
                    <h1>Contact Me</h1>
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/films">
                    <Films />
                </Route>
                <Route path="/music">
                    <Music />
                </Route>
                <Redirect exact from="/" to="/home" />
            </Switch>
        </Router>
    )
}

export default App