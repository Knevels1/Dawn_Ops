import React, {useContext, useEffect} from "react"
import { ChatContext } from "./ChatProvider"
import "./Chat.css"



export const Chat = (props) =>{
  const { removeChat, getChats } = useContext(ChatContext)
  useEffect(
    () => {
      console.log("CustomerList: Initial render before data")
      getChats()
    },
    []
  )
  
    return ( 
        <section className="chat">
        <h3 className="chat__message">{chat.message}</h3>
        <div className="chat__sender">--{chat.name}</div>
        <button className="btn--release"
          onClick={() => {
            removeChat(chat.id)
              .then(() => props.history.push("/Chat"))
          // Code to delete animal from database
          // releaseAnimal(props.match.params.animalId)
        }}
        >Delete</button>
        </section>
)}