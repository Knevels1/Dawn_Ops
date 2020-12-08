import React from "react"
import "./Bio.css"

export const Bio = ({ bios }) => (
    <section className="bio">
        <h3 className="bios">ABOUT DAWN OPS</h3>
        <div className="bio__about">{bios.about}</div>
        <div className="bio__age">{bios.age}</div>
        <div className="bio__app">{bios.app}</div>
<div className="bio__conitnues">{bios.continue}</div>
    </section>
)