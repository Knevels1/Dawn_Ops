import React, {useContext, useRef} from "react"
import { ChatContext } from "./ChatProvider"



export const ChatInput = () => {
    const { addChat} = useContext(ChatContext)
  
  const message = useRef(null)

  const newMessage = () => {
      
      addChat({
        message: message.current.value,
        userId: parseInt(localStorage.getItem("dawnops_user")) })
  }

  return (
    <form>
      <input type="text" placeholder="Say what's on your mind" ref={message} />
      <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    newMessage()
                }}
                className="btn btn-primary">
                
               POST
            </button>
    </form>
  )
}