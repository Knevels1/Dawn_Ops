import React, { useContext, useEffect } from "react"
import ReactPlayer from "react-player"
import "./Clip.css"

export const Clip = ({clip}) => {
    

    if (localStorage.getItem("Admin")){ return (
      <section className="clips">
      <h3 className="clip__name">{clip.name}</h3>
    <ReactPlayer url={clip.url}
    width="360px"
    controls />
      <button className="btn--release"
          onClick={() => { if (localStorage.getItem("Admin")){
            console.log("bye bye")
          }}}
        >Remove Game</button>
        </section>
        )
}else if (localStorage.getItem("dawnops_user")) {
  return (
    <section className="clips">
      <h3 className="clip__name">{clip.name}</h3>
    <ReactPlayer url={clip.url}
    width= '50%'
    controls />
      </section> ) }
}