import React from "react"
import { Route } from "react-router-dom"
import { BioList } from "./bio/BioList"
import { BioProvider } from "./bio/BioProvider"
import { ChatInput } from "./chats/ChatForm"
import { ChatList } from "./chats/ChatList"
import { ChatProvider } from "./chats/ChatProvider"

export const ApplicationViews = (props) => {
    return (
        <>
        <BioProvider>
            <Route exact path ="/">
                <BioList />
            </Route>
        </BioProvider>
        <ChatProvider>
            <Route exact path="/Chat" render={
                props =><>
                    <ChatInput />
                    <ChatList {...props} />
                    </>
            } />
        </ChatProvider>
        </>
    )
}