import React from "react"
import { Route } from "react-router-dom"
import { BioList } from "./bio/BioList"
import { BioProvider } from "./bio/BioProvider"
import { ChatInput } from "./chats/ChatForm"
import { ChatList } from "./chats/ChatList"
import { ChatProvider } from "./chats/ChatProvider"
import { ClipForm } from "./clips/ClipForm"
import { ClipList } from "./clips/ClipList"
import { ClipProvider } from "./clips/ClipProvider"
import { GameForm } from "./games/GameForm"
import { GameList } from "./games/GamesList"
import { GameProvider } from "./games/GamesProvider"

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
        <GameProvider>
            <Route exact path="/Games" render={
                props => <GameForm {...props} />
            } />
            <Route exact path ="/Games">
                <GameList />
            </Route>
        </GameProvider>
        <ClipProvider>
            <Route exact path="/Clips" render={
                props => <ClipForm {...props} />
            } />
            <Route exact path="/Clips" render={
                props => <ClipList {...props} />
            } />
        </ClipProvider>
    </>
    )
}