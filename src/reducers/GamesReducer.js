export const GamesReducer = (state = [], action) => {
    let games = state.slice()
    switch(action.type){
      case 'ADD_GAME':
        return [...state, action.payload]
      case 'REMOVE_GAME':
        let copy1 = state.slice(0, action.index)
        let copy2 = state.slice(action.index+1)
        copy1 = copy1.concat(copy2)
        return copy1
      case 'SWAP_MATCHUP':
        let tempHolder = games[action.index].winner
        games[action.index].winner = games[action.index].loser
        games[action.index].loser = tempHolder
        return [...games]
      case 'SET_WINNER_INFO':
        games[action.index].winner = action.payload
        return [...games]
      case 'SET_LOSER_INFO':
        games[action.index].loser = action.payload
        return [...games]
      case 'SET_WINNER_RUNS':
        games[action.index].winnerRuns = action.payload
        return [...games]
      case 'SET_LOSER_RUNS':
        games[action.index].loserRuns = action.payload
        return [...games]
      case 'SET_VENUE':
        games[action.index].venue = action.payload
        return [...games]
      case 'GET_GAMES':
        return state
      default:
        return state  
    }
  }