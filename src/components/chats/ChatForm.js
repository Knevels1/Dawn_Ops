import React, {useContext, useRef, useEffect} from "react"
import { ChatContext } from "./ChatProvider"



export const ChatInput = () => {
    const { addChat, getUsers, users} = useContext(ChatContext)
      useEffect(() => {
        getUsers()
      }, [])
  
  const message = useRef(null)
  const usernames = users.find( u => u.id === parseInt(localStorage.getItem("dawnops_user")))
  console.log(users)
  const newMessage = () => {
      
      addChat({
        message: message.current.value,
        username: usernames.name,
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