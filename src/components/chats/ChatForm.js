import React, {useContext, useRef, useEffect, useState} from "react"
import { ChatContext } from "./ChatProvider"



export const ChatInput = () => {
  const { addChat, getUsers, users} = useContext(ChatContext)
    const [usernames, setUsers] = useState({})
    useEffect(() => {
      getUsers()
    }, [])
  //   useEffect(() => {
  //     const username = users.find(u => u.id === parseInt(localStorage.getItem("dawnops_user")))
  //     setUsers(username)
  // }, [users])
  
  const message = useRef(null)
  const user = users.find(u =>  u.id=== parseInt(localStorage.getItem("dawnops_user") ))
  
  const newMessage = () => {
    const username = user.name
      
      addChat({
        message: message.current.value,
        username,
        userId: parseInt(localStorage.getItem("dawnops_user")) })
  }

  return (
    <form>
      <input type="text" placeholder="Say what's on your mind" ref={message} /> {/* register an input */}
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