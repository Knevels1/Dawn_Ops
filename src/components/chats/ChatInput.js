import React from "react"
import "./Chat.css"

export const ChatInput = (props) => {

    return (
        <>
            Your Message:
            <input type="text"
                className="input--wide"
                placeholder="Say Something... " /><button className="send">Post</button>
            
        </>
    )
}