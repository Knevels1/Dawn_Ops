import React, {useContext} from "react"
import { useForm } from 'react-hook-form';
import { ChatContext } from "./ChatProvider"

export const ChatInput = () => {
    const { addChat } = useContext(ChatContext)

  const { register, handleSubmit} = useForm(); // initialize the hook
  const onSubmit = (data) => {
    addChat(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="message" placeholder="Say what's on your mind" ref={register} /> {/* register an input */}
      <input type="submit" />
    </form>
  )
}