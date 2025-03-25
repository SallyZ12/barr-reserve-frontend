const initialState = {
   username: "",
   password: ""
}
const loginFormReducer = (state = initialState, action) => {
  switch(action.type) {

    case "UPDATE_LOGIN_FORM":
      return action.formData

    case "RESET_LOGIN_FORM":
      return initialState

    default:
      return state

  }
}

export default loginFormReducer;


// version below original before fix for eslint issue above

// const initialState = {
   // username: "",
   // password: ""
// }
// export default (state = initialState, action) => {
  // switch(action.type) {

    // case "UPDATE_LOGIN_FORM":
      // return action.formData

    // case "RESET_LOGIN_FORM":
      // return initialState

    // default:
      // return state

  // }
// }
