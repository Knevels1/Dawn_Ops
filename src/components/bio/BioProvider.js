import React, { useState } from "react"

export const BioContext = React.createContext()


export const BioProvider = (props) => {

  const [bios, setBio] = useState([]) 


  const getBio = () => {
    return fetch("http://localhost:8088/bios")
      .then(res => res.json())
      .then(setBio)

  }

  return (
    <BioContext.Provider value={
      {
      bios, getBio
      }
    }>
      {props.children}
    </BioContext.Provider>
  )
}