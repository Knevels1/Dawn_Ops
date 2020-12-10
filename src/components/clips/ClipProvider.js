import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ClipContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ClipProvider = (props) => {

  const [clips, setClip,] = useState([]) 
  // useState returns [initial value of state variable, a function to set the value of the state variable]

  const getClips = () => {
    return fetch("http://localhost:8088/clips")
      .then(res => res.json())
      .then(setClip)
      // .then(parsedLocations => setLocations(parsedLocations))
  }
  return (
    <ClipContext.Provider value={
      {
      clips, getClips
      }
    }>
      {props.children}
    </ClipContext.Provider>
  )
}