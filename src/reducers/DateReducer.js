const defaultDate = new Date()

export const DateReducer = (state= {date: defaultDate.toISOString().split('T')[0]}, action) => {
  switch(action.type){
    case 'SET_DATE':
      return Object.assign({}, {date: action.payload});
    default: 
      return state;
  }
}