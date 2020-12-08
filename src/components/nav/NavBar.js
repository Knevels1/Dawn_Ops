import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Bio</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/clips">Clips</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Games">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Chat">Employees</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link"  to="https://www.twitch.tv/dawn_ops">Live Stream</Link>
            </li>
        </ul>
    )
}