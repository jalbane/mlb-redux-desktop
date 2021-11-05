import {DateReducer} from './DateReducer.js' 
import {GamesReducer} from './GamesReducer.js' 
import {FranchiseReducer} from './FranchiseReducer.js' 
import  {combineReducers}  from 'redux';

export const rootReducer = combineReducers({
    FranchiseReducer,
    GamesReducer,
    DateReducer
  })