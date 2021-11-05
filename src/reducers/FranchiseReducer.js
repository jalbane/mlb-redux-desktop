export const FranchiseReducer = (state = [], action) => {
    switch(action.type){
      case 'ADD_FRANCHISE':
        return [...action.payload]
      default:
        return state
    }
  }