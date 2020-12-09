import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
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
      // .then(parsedLocations => setLocations(parsedLocations))
  }
   const removeChat = chatId => {
    return fetch(`http://localhost:8088/chats/${chatId}`, {
        method: "DELETE"
    })
        .then(getChats)
  }
  /*
      You return a context provider which has the
      `locations` state, the `addLocation` function,
      and the `getLocation` function as keys. This
      allows any child elements to access them.
  */
  return (
    <ChatContext.Provider value={
      {
      chats, getChats, removeChat
      }
    }>
      {props.children}
    </ChatContext.Provider>
  )
}