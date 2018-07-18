import * as action from './actions'

export const init = () => {
  return {
    type: action.INIT,
    payload: {}
  }
}

export const update = (value) => {
  return {
    type: action.UPDATE,
    payload: value
  }
}

const ACTION_HANDLERS = {
  [action.INIT]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.SET_STATE]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.UPDATE]: (state, action) => {
    return { ...state, ...action.payload }
  }
}

let defaultState = {}

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}