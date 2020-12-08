import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { DawnOps } from "./components/DawnOps.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <DawnOps />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)

