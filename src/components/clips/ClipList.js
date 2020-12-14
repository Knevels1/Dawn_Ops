import React, { useContext, useEffect } from "react"
import { ClipContext } from "./ClipProvider"
import { Clip } from "./Clip"

export const ClipList = () => {
    const { clips, getClips } = useContext(ClipContext)

    useEffect(
        () => {
          getClips()
        },
        []
      )
    
      return (
        <>
        <div className="clips">
            {clips.map(cl => <Clip key={cl.id} clip={cl} />)}
        </div>
      </>
      )
}