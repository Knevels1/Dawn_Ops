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
  }
  const removeClip = clipId => {
    return fetch(`http://localhost:8088/clips/${clipId}`, {
      method: "DELETE"
    })
    .then(getClips)
  }
  const addClip = (clips) => {
    return fetch(`http://localhost:8088/clips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(clips)
    })
    .then(getClips)
  }
  return (
    <ClipContext.Provider value={
      {
        clips, getClips, addClip, removeClip
      }
    }>
      {props.children}
    </ClipContext.Provider>
  )
}