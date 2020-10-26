import {
  FETCH_PERSONAL_SUCCESS,
  FETCH_POSITIONS_SUCCESS,
  PERSONAL_ADD,
  PERSONAL_DELETE, PERSONAL_SORT_UPDATE,
  PERSONAL_UPDATE
} from './actionTypes'
import { getPersonal } from '../services/PersonalService'
import { getPositions } from '../services/PositionService'

export const fetchPositions = () => {
  return dispatch => {
    return getPositions().then((data) => {
      // setTimeout(() => {
      dispatch(fetchPositionsSuccess(data.data))
      // },2000);
    }).catch(err => {
      console.log(err.message)
    })
  }
}

const fetchPositionsSuccess = items => ({
  type: FETCH_POSITIONS_SUCCESS,
  payload: items
})

export const fetchPersonal = () => {
  return dispatch => {
    return getPersonal().then((data) => {
      dispatch(fetchPersonalSuccess(data.data))
    }).catch(err => {
      console.log(err.message)
    })
  }
}

const fetchPersonalSuccess = items => ({
  type: FETCH_PERSONAL_SUCCESS,
  payload: items
})

export const addPersonal = item => ({
  type: PERSONAL_ADD,
  payload: item
})

export const deletePersonal = id => ({
  type: PERSONAL_DELETE,
  payload: id
})

export const updatePersonal = item => ({
  type: PERSONAL_UPDATE,
  payload: item
})

export const updatePersonalSort = items => ({
  type: PERSONAL_SORT_UPDATE,
  payload: items
})
