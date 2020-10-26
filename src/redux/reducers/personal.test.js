import * as types from '../actionTypes'
import reducer from './personal'
const exampleItem = {
  id: 1,
  name: 'John',
  secondName: 'Smith',
  position: 100
}
const initState = {
  items: [],
  isLoaded: false
}
describe('personal reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initState
    )
  })
  it('function PERSONAL_ADD', () => {
    expect(
      reducer(initState, {
        type: types.PERSONAL_ADD,
        payload: exampleItem
      })
    ).toEqual({
      ...initState,
      items: [
        exampleItem
      ]
    })
  })
  it('function PERSONAL_UPDATE', () => {
    const newState = reducer(initState, {
      type: types.PERSONAL_ADD,
      payload: exampleItem
    })
    const updatedItem = { ...exampleItem, name: 'Nikolay' }
    expect(
      reducer(newState, {
        type: types.PERSONAL_UPDATE,
        payload: updatedItem
      })
    ).toEqual({
      ...initState,
      items: [
        updatedItem
      ]
    })
  })
  it('function PERSONAL_DELETE', () => {
    const newState = reducer(initState, {
      type: types.PERSONAL_ADD,
      payload: exampleItem
    })
    const deleteId = exampleItem.id
    expect(
      reducer(newState, {
        type: types.PERSONAL_DELETE,
        payload: deleteId
      })
    ).toEqual({
      ...initState,
      items: []
    })
  })
})
