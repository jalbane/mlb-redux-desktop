import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux';
import {Provider} from 'react-redux'

export const FranchiseReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_FRANCHISE':
      return [...action.payload]
    default:
      return state
  }
}

export const GamesReducer = (state = new Array(0), action) => {
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

const defaultDate = new Date()

export const DateReducer = (state= {date: defaultDate.toISOString().split('T')[0]}, action) => {
  switch(action.type){
    case 'SET_DATE':
      return Object.assign({}, {date: action.payload});
    default: 
      return state;
  }
}

const rootReducer = combineReducers({
  FranchiseReducer,
  GamesReducer,
  DateReducer
})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
