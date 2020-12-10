import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const GameContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const GameProvider = (props) => {

  const [games, setGame,] = useState([]) 
  // useState returns [initial value of state variable, a function to set the value of the state variable]

  const getGames = () => {
    return fetch("http://localhost:8088/games")
      .then(res => res.json())
      .then(setGame)
      // .then(parsedLocations => setLocations(parsedLocations))
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