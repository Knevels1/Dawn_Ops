import React, { useContext, useEffect } from "react"
import { ChatContext } from "./ChatProvider"
import { Chat } from "./Chat"

export const ChatList = () => {
    const { chats, getChats } = useContext(ChatContext)

    useEffect(
        () => {
          console.log("ChatList: Initial render before data")
          getChats()
        },
        []
      )
    
      return (
      <>
        <div className="chats">
            {chats.map(c => <Chat key={c.id} chat={c} />)}
        </div>
      </>
      )
}