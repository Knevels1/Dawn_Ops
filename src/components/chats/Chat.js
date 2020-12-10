import React, { useContext} from "react"
import { ChatContext } from "./ChatProvider"
import "./Chat.css"

export const Chat = ({chat}) => {
    const { removeChat} = useContext(ChatContext)

    if (localStorage.getItem("Admin")){ return (
      <section className="chat">
      <h3 className="chat__message">{chat.message}</h3>
      <div className="chat__sender">--{chat.name}</div>
      <button className="btn--release"
          onClick={() => { if (localStorage.getItem("Admin")){
            console.log("bye bye")
            removeChat(chat.id)
          }}}
        >delete</button>
        </section>
        )
}else if (localStorage.getItem("dawnops_user")) {
  return (
    <section className="chat">
      <h3 className="chat__message">{chat.message}</h3>
      <div className="chat__sender">--{chat.name}</div>
      </section> ) }
}