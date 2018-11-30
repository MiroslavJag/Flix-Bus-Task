import * as actionsType from '../actions/actionsTypes';
import {reducer, initialState} from './reducer';


test('Returns deafult inital state', ()=> {
  const state = reducer(initialState, {});
  expect(state.list).toBe(null);
  });

  // test('Returns state upon receiving an action of type `SOMEACTIONONE`', ()=> {
  //   const state = reducer(initialState, {type: actionsType.SOMEACTIONONE});
  //   expect(state).toEqual({list: null, error: false})
  // })