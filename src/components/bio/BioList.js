import React, { useContext, useEffect } from "react"
import { Bio } from "./Bio"
import { BioContext } from "./BioProvider"

export const BioList = () => {
  const { bios, getBio } = useContext(BioContext)

  useEffect(
    () => {
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