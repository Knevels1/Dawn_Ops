import React, { useContext, useEffect, useRef, useState} from "react"
import ReactPlayer from "react-player"
import { ClipContext } from "./ClipProvider"
import "./Clip.css"

export const Clip = ({clip}) => {
  const { removeClip, addComment, getComments, comment, removeComment } = useContext(ClipContext)
  
  useEffect(()=>{
     getComments()
  }, [])
  
  
  const comments = useRef(null)

  const newComment = () => {
     addComment({
        text: comments.current.value,
        videoId: clip.id,
        userId:parseInt(localStorage.getItem("dawnops_user"))
      })
    }
    

    if (localStorage.getItem("Admin")){ return (
      <section className="clip">
      <h3 className="clip__name">{clip.name}</h3>
    <ReactPlayer url={clip.url}
    width="400px"
    controls />
    <h3>DESCRIPTION</h3>
    <div>{clip.description}</div>
    <h3>Comments</h3>
    <div className="comments">{comment.map(c => {
      if(c.videoId === clip.id){
        return(<div className="comment">{c.text}</div>)
      }
    })}</div>
    <input name="name" placeholder="Your Comment Here Please" ref={comments} /><button className="comment__button" onClick={() => newComment()}>Add Comment</button>
      <button className="btn--release"
          onClick={() => { if (localStorage.getItem("Admin")){
            console.log("bye bye")
            removeClip(clip.id)
            {comment.map(c => {
              if(c.videoId === clip.id){
                return(removeComment(c.id))
              }
            })}
          }}}
        >Remove Vid</button>
        </section>
        )
}else if (localStorage.getItem("dawnops_user")) {
  return (
    <section className="clip">
      <h3 className="clip__name">{clip.name}</h3>
    <ReactPlayer url={clip.url}
    width="400px"
    controls />
    <h3>DESCRIPTION</h3>
    <div>{clip.description}</div>
    <h3>Comments</h3>
    <div className="comments">{comment.map(c => {
      if(c.videoId === clip.id){
        return(<div className="comment">{c.text}</div>)
      }
    })}</div>
    <input name="name" placeholder="Your Comment Here Please" ref={comments} /><button className="comment__button" onClick={() => newComment()}>Add Comment</button>
      </section> ) }
}