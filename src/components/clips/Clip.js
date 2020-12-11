import React, { useContext} from "react"
import ReactPlayer from "react-player"
import { ClipContext } from "./ClipProvider"
import "./Clip.css"

export const Clip = ({clip}) => {
  const { removeClip } = useContext(ClipContext)
    

    if (localStorage.getItem("Admin")){ return (
      <section className="clip">
      <h3 className="clip__name">{clip.name}</h3>
    <ReactPlayer url={clip.url}
    width="360px"
    controls />
    <div>{clip.description}</div>
      <button className="btn--release"
          onClick={() => { if (localStorage.getItem("Admin")){
            console.log("bye bye")
            removeClip(clip.id)
          }}}
        >Remove Vid</button>
        </section>
        )
}else if (localStorage.getItem("dawnops_user")) {
  return (
    <section className="clip">
      <h3 className="clip__name">{clip.name}</h3>
    <ReactPlayer url={clip.url}
    width="360px"
    controls />
    <div>{clip.description}</div>
      </section> ) }
}