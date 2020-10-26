import {
  FETCH_PERSONAL_SUCCESS,
  PERSONAL_ADD,
  PERSONAL_DELETE,
  PERSONAL_SORT_UPDATE,
  PERSONAL_UPDATE
} from '../actionTypes'

const initialState = {
  items: [],
  isLoaded: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PERSONAL_SUCCESS: {
      const items = action.payload
      return {
        ...state,
        items: items,
        isLoaded: true
      }
    }
    case PERSONAL_DELETE: {
      const id = action.payload
      return {
        ...state,
        items: [
          ...state.items.filter((item, index) => item?.id !== id)
        ]
      }
    }
    case PERSONAL_ADD: {
      const item = action.payload
      return {
        ...state,
        items: [
          ...state.items,
          item
        ]
      }
    }
    case PERSONAL_UPDATE: {
      const item = action.payload
      return {
        ...state,
        items: [
          ...state.items.map((innerItem, index) => innerItem?.id === item?.id ? item : innerItem)
        ]
      }
    }
    case PERSONAL_SORT_UPDATE: {
      const items = action.payload
      return {
        ...state,
        items: [
          ...items
        ]
      }
    }
    default:
      return state
  }
}
