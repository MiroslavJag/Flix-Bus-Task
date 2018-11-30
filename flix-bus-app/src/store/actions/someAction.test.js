import * as actions from './index';
import * as  actionTypes from './actionsTypes';

describe('actionOne', () => {
  test('Returns an action with type `SOMEACTIONONE`', () => {
    //const getList = actions.someInitList();
  
      //expect(getList).toEqual({res: 'hahah' })
    
      const actionOne = actions.actionOne();
      expect(actionOne).toEqual({type: actionTypes.SOMEACTIONONE, list: undefined})
  
  })
})