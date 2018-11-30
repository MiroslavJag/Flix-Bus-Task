import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const setSearchData = (value) => {
  return {
      type: actionTypes.SETSEARCHDATA,
      destinations: value
  };
};

export const setErorr = ( ) => {
  return {
      type: actionTypes.SETERROR
  };
};


export const getSearchData = () => {
  return dispatch => {
    axios.get('https://api.myjson.com/bins/136x36')
      .then(response => {
        dispatch(setSearchData(response.data))
      })
      .catch(error => {
        dispatch(setErorr())
      })
  }
}
