import React from "react"
import { Route } from "react-router-dom"
import { BioList } from "./bio/BioList"
import { BioProvider } from "./bio/BioProvider"

export const ApplicationViews = (props) => {
    return (
        <>
        <BioProvider>
            <Route exact path ="/">
                <BioList />
            </Route>
        </BioProvider>
        </>
    )
}