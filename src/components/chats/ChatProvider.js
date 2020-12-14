import React, { useState } from "react"


export const ChatContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ChatProvider = (props) => {

  const [chats, setChat] = useState([]) 
  // useState returns [initial value of state variable, a function to set the value of the state variable]

  const getChats = () => {
    return fetch("http://localhost:8088/chats")
      .then(res => res.json())
      .then(setChat)

  }
  const getUsersById = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}`)
      .then(res => res.json())

  }
   const removeChat = chatId => {
    return fetch(`http://localhost:8088/chats/${chatId}`, {
        method: "DELETE"
    })
        .then(getChats)
  }
  const addChat = (chats) => {
    return fetch(`http://localhost:8088/chats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(chats)
    })
      .then(getChats)
  }
  return (
    <ChatContext.Provider value={
      {
      chats, getChats, removeChat, addChat, getUsersById
      }
    }>
      {props.children}
    </ChatContext.Provider>
  )
}