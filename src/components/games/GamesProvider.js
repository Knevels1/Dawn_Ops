import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {

  const [games, setGame,] = useState([]) 

  const getGames = () => {
    return fetch("http://localhost:8088/games")
      .then(res => res.json())
      .then(setGame)

  }
  const removeGame = gameId => {
    return fetch(`http://localhost:8088/games/${gameId}`, {
        method: "DELETE"
    })
        .then(getGames)
  }
  const addGame = (games) => {
    return fetch(`http://localhost:8088/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(games)
    })
      .then(getGames)
  }
  return (
    <GameContext.Provider value={
      {
      games, getGames, removeGame, addGame
      }
    }>
      {props.children}
    </GameContext.Provider>
  )
}