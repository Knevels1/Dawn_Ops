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
                <Link className="navbar__link" to="/Games">Games</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Chat">Chat</Link>
            </li>
            <li className="navbar__item">
                <a className="navbar__link"  href="https://www.twitch.tv/dawn_ops">Live</a>
            </li>
            <Link to="/Login">
                <button type="button" onClick={evt => {
                (localStorage.clear())
            }}>LogOut</button>
            </Link>
        </ul>
    )
}