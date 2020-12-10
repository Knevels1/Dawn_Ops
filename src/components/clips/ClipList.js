import React, { useContext, useEffect } from "react"
import ReactPlayer from "react-player"
import { ClipContext } from "./ClipProvider"

export const ClipList = () => {
    const { getClips } = useContext(ClipContext)

    useEffect(
        () => {
          console.log("GameList: Initial render before data")
          getClips()
        },
        []
      )
    
      return (
        <>
        <div>
      <ReactPlayer
        url="https://www.twitch.tv/videos/814181261"
        width= '50%'
         controls
      />
      <ReactPlayer
        url="https://www.twitch.tv/videos/832302683"
        width= '50%'
         controls
      />
    </div>,
      </>
      )
}