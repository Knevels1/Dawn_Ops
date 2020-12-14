import React, { useState } from "react"

export const ClipContext = React.createContext()

export const ClipProvider = (props) => {

  const [clips, setClip,] = useState([]) 

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