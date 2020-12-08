import React, { useContext, useEffect } from "react"
import { Bio } from "./Bio"
import { BioContext } from "./BioProvider"

export const BioList = () => {
  // This state changes when `getLocations()` is invoked below
  const { bios, getBio } = useContext(BioContext)

  /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
  useEffect(
    () => {
      console.log("BioList: Initial render before data")
      getBio()
    },
    []
  )

  return (
    <div className="bio">
      {
        bios.map(b => <Bio key={b.id} bios={b} />)
      }
    </div>
  )
}