import * as types from '../actionTypes'
import reducer from './position'
import convertArrayToObjectWithKey from '../../helpers/convertArrayToObjectWithKey'

const initState = {
  items: [],
  isLoaded: false
}

const positionItems = [
  {
    id: 100,
    name: 'Junior'
  },
  {
    id: 200,
    name: 'Middle'
  }
]

describe('position reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initState
    )
  })

  it('function FETCH_POSITIONS_SUCCESS', () => {
    expect(
      reducer(initState, {
        type: types.FETCH_POSITIONS_SUCCESS,
        payload: positionItems
      })
    ).toEqual({
      ...initState,
      items: convertArrayToObjectWithKey(positionItems, 'id'),
      isLoaded: true
    })
  })
})
