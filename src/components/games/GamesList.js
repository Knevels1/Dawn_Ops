import React, { useContext, useEffect } from "react"
import { GameContext } from "./GamesProvider"
import { Game } from "./Games"

export const GameList = () => {
    const { games, getGames } = useContext(GameContext)

    useEffect(
        () => {
          getGames()
        },
        []
      )
    
      return (
        <>
        <div className="games">
            {games.map(g => <Game key={g.id} game={g} />)}
        </div>
      </>
      )
}