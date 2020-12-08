import React from "react"
import { Route, Redirect } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./DawnOps.css"

export const DawnOps = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("dawnops_user")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)