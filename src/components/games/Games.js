import React, {useContext}from "react"
import { GameContext } from "./GamesProvider"
import "./Games.css"

export const Game = ({game}) => {
  const { removeGame} = useContext(GameContext)

    if (localStorage.getItem("Admin")){ return (
      <section className="game">
      <h3 className="game__name">{game.name}</h3>
      <div className="game__description">{game.description}</div>
      <button className="btn--release"
          onClick={() => { if (localStorage.getItem("Admin")){
            console.log("bye bye")
            removeGame(game.id)
          }}}
        >Remove Game</button>
        </section>
        )
}else if (localStorage.getItem("dawnops_user")) {
  return (
    <section className="game">
      <h3 className="game__name">{game.name}</h3>
      <div className="game__description">{game.description}</div>
      </section> ) }
}