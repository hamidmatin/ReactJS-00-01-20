import * as actionTypes from './actiontypes'

const initState = {
  posts: [],
  users: [],
  test: 'Redux Test'
}
const rootReducer = (state = initState, action) =>{
  console.log('In Reducer', state)
  console.log('In Reducer', action)

  switch (action.type) {
    case actionTypes.TEST_CC:
      
      return {
        ...state,
        test: action.payload
      }
  
    default:
      return state
  }
}

export default rootReducer;