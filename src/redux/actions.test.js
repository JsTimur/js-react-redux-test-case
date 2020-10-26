import * as actions from './actions'
import * as types from './actionTypes'
const item = {
  id: 1,
  name: 'John',
  secondName: 'Smith',
  position: 100
}
describe('actions', () => {
  it('add personal', () => {
    const expectedAction = {
      type: types.PERSONAL_ADD,
      payload: item
    }
    expect(actions.addPersonal(item)).toEqual(expectedAction)
  })
  it('delete personal', () => {
    const id = 1
    const expectedAction = {
      type: types.PERSONAL_DELETE,
      payload: id
    }
    expect(actions.deletePersonal(id)).toEqual(expectedAction)
  })
  it('update personal', () => {
    const expectedAction = {
      type: types.PERSONAL_UPDATE,
      payload: item
    }
    expect(actions.updatePersonal(item)).toEqual(expectedAction)
  })
})
