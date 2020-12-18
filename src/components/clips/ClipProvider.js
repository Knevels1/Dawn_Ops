import React, { useState } from "react"

export const ClipContext = React.createContext()

export const ClipProvider = (props) => {

  const [clips, setClip,] = useState([]) 
  const [comment, setComment] = useState([])


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
  const addComment = (comments) => {
    return fetch(`http://localhost:8088/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comments)
    })
    .then(getClips)
    .then(getComments)
  }
  const getComments = () => {
    return fetch(`http://localhost:8088/comments`)
    .then(res => res.json())
    .then(setComment)
  }
  const removeComment = commentId => {
    return fetch(`http://localhost:8088/comments/${commentId}`, {
        method: "DELETE"
    })
        .then(getComments)
  }

  return (
    <ClipContext.Provider value={
      {
        clips, getClips, addClip, removeClip, addComment, getComments, comment, removeComment
      }
    }>
      {props.children}
    </ClipContext.Provider>
  )
}