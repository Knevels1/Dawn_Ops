import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const BioContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const BioProvider = (props) => {

  const [bios, setBio] = useState([]) 
  // useState returns [initial value of state variable, a function to set the value of the state variable]

  const getBio = () => {
    return fetch("http://localhost:8088/bios")
      .then(res => res.json())
      .then(setBio)
      // .then(parsedLocations => setLocations(parsedLocations))
  }

  /*
      You return a context provider which has the
      `locations` state, the `addLocation` function,
      and the `getLocation` function as keys. This
      allows any child elements to access them.
  */
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