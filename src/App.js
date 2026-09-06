import React from "react"
import NavigationMenu from "./components/NavigationMenu"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import Home from "./components/Home"
import Resume from "./components/Resume"
import Films from "./components/Films"
import Music from "./components/Music"

function App() {
    return (
        <Router>
            <NavigationMenu />
            <Routes>
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<h1>Contact Me</h1>} />
                <Route path="/home" element={<Home />} />
                <Route path="/films" element={<Films />} />
                <Route path="/music" element={<Music />} />
                <Route path="/" element={<Navigate to="/home" replace />} />
            </Routes>
        </Router>
    )
}

export default App