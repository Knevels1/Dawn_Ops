import React, {useContext} from "react"
import { useForm } from 'react-hook-form';
import { ClipContext } from "./ClipProvider";

export const ClipForm = () => {
    const { addClip} = useContext(ClipContext)

  const { register, handleSubmit} = useForm(); // initialize the hook
  const onSubmit = (data) => {
    addClip(data)
  };

  if (localStorage.getItem("Admin")){ return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" placeholder="Title" ref={register} /> {/* register an input */}
      <input name="url" placeholder="Video URL" ref={register} />
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