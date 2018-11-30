import * as actionTypes from '../actions/actionsTypes';

export const initialState = {
  destinations: null,
  error: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
      case actionTypes.SETSEARCHDATA:
        return {
          ...state,
          destinations: action.destinations,
          error: false
        }
      case actionTypes.SETERROR:
        return{
          ...state,
          error: true
        }
      default:
        return state;
    }
}

export default reducer;
