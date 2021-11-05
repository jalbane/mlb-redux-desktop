import {ADD_FRANCHISE, ADD_GAME, REMOVE_GAME, SWAP_MATCHUP, SET_WINNER_INFO, SET_LOSER_INFO, SET_WINNER_RUNS, SET_LOSER_RUNS, SET_VENUE, SET_DATE, GET_GAMES} from './action.js'
import {connect} from 'react-redux'
import App from './components/App';

const mapStateToProps = (state) => {
  return {
    MLBTeams: state.FranchiseReducer,
    Games: state.GamesReducer,
    Date: state.DateReducer.date
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFranchise: (arr) => dispatch(ADD_FRANCHISE(arr)),
    addGame: () => dispatch(ADD_GAME()),
    removeGame: (index) => dispatch(REMOVE_GAME(index)),
    swapMatchup: (index) => dispatch(SWAP_MATCHUP(index)),
    setWinnerInfo: (obj, index) => dispatch(SET_WINNER_INFO(obj, index)),
    setLoserInfo: (obj, index) => dispatch(SET_LOSER_INFO(obj, index)),
    setWinnerRuns: (obj, index) => dispatch(SET_WINNER_RUNS(obj, index)),    
    setLoserRuns: (obj, index) => dispatch(SET_LOSER_RUNS(obj, index)),
    setVenue: (venue, index) => dispatch(SET_VENUE(venue, index)),
    setDate: (Date) => dispatch(SET_DATE(Date)),
    getGames: () => dispatch(GET_GAMES())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);