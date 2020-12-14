import React, {useContext} from "react"
import { useForm } from 'react-hook-form';
import { ClipContext } from "./ClipProvider";

export const ClipForm = () => {
    const { addClip} = useContext(ClipContext)

  const { register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    data.userId = parseInt(localStorage.getItem("dawnops_user"))
    addClip(data)
  };
  if (localStorage.getItem("Admin")){ return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" placeholder="Title" ref={register} />
      <input name="url" type="url" placeholder="Video URL" pattern="https://.*" ref={register} />
      <input name="description" placeholder="why this video?" ref={register} />
      <input type="submit" />
    </form>
  )
  }else if (localStorage.getItem("dawnops_user")){
    return(
      <h3></h3>
    )
  }
}