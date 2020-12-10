import React, {useContext} from "react"
import { useForm } from 'react-hook-form';
import { GameContext } from "./GamesProvider";

export const GameForm = () => {
    const { addGame, getGames } = useContext(GameContext)

  const { register, handleSubmit} = useForm(); // initialize the hook
  const onSubmit = (data) => {
    addGame(data)
  };

  if (localStorage.getItem("Admin")){ return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" placeholder="Title of the Game" ref={register} /> {/* register an input */}
      <input name="path" placeholder="Image URL" ref={register} />
      <input name="description" placeholder="whats the game about?" ref={register} />
      <input type="submit" />
    </form>
  )
  }else if (localStorage.getItem("dawnops_user")){
    return(
      <h3></h3>
    )
  }
}