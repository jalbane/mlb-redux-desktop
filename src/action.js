const ADD_FRANCHISE = (obj) => {
    return {
        type: 'ADD_FRANCHISE',
        payload: obj
    }
}

const ADD_GAME = () => {
    return {
        type: 'ADD_GAME',
        payload: {
            winner: '',
            loser: '',
            winnerRuns: null,
            loserRuns: null,
            venue: ''
        }
    }
}

const REMOVE_GAME = (i) => {
    return {
        type: 'REMOVE_GAME',
        index: i
    }
}

const SWAP_MATCHUP = (i) => {
    return {
        type: 'SWAP_MATCHUP',
        index: i
    }
}

const SET_WINNER_INFO = (winner, i) => {
    return {
        type: 'SET_WINNER_INFO',
        payload: winner,
        index: i
    }
}

const SET_LOSER_INFO = (loser, i) => {
    return {
        type: 'SET_LOSER_INFO',
        payload: loser,
        index: i
    }
}

const SET_WINNER_RUNS = (runs, i) => {
    return {
        type: 'SET_WINNER_RUNS',
        payload: runs,
        index: i
    }
}

const SET_LOSER_RUNS = (runs, i) => {
    return {
        type: 'SET_LOSER_RUNS',
        payload: runs,
        index: i
    }
}

const SET_VENUE = (venue, i) => {
    return {
        type: 'SET_VENUE',
        payload: venue,
        index: i
    }
}

const SET_DATE = (Date) => {
    return{
        type: 'SET_DATE',
        payload: Date
    }
}

const GET_GAMES = () => {
    return {
        type: 'GET_GAMES'
    }
}

export {ADD_FRANCHISE, ADD_GAME, REMOVE_GAME, SWAP_MATCHUP, SET_WINNER_INFO, SET_LOSER_INFO, SET_WINNER_RUNS, SET_LOSER_RUNS, SET_VENUE, SET_DATE, GET_GAMES};