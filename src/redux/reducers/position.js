import { FETCH_POSITIONS_SUCCESS } from '../actionTypes'
import convertArrayToObjectWithKey from '../../helpers/convertArrayToObjectWithKey'

const initialState = {
  items: [],
  isLoaded: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSITIONS_SUCCESS: {
      const items = action.payload
      return {
        ...state,
        items: convertArrayToObjectWithKey(items, 'id'),
        isLoaded: true
      }
    }
    default:
      return state
  }
}
