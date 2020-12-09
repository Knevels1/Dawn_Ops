import React, { useContext, useEffect, useState } from "react"
import { ChatContext } from "./ChatProvider"
import "./Chat.css"

export const Chat = ({chat}) => {
    const { removeChat} = useContext(ChatContext)

    return (
      <section className="chat">
      <h3 className="chat__message">{chat.message}</h3>
      <div className="chat__sender">--{chat.name}</div>
      <button className="btn--release"
          onClick={() => { if (localStorage.getItem("Admin")){
            console.log("bye bye")
            removeChat(chat.id)
          }else if (localStorage.getItem("dawnops_user")) {
            alert("you do not have persmission to complete this action")
          }
          // Code to delete animal from database
          // releaseAnimal(props.match.params.animalId)
        }}
        >delete</button>
        </section>
        )
}