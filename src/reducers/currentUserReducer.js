
const currentUserReducer = (state = {}, action) => {

    switch (action.type) {

      case "SET_CURRENT_USER":
      case "ADD_RESERVATION_TO_CURRENT_USER":
      case "DELETE_RESERVATION_FROM_CURRENT_USER":
      case "ADD_EDITED_USER_TO_CURRENT_USER":

        return action.user

      case "CLEAR_CURRENT_USER":
        return {}

      default:
        return state

    }
}

export default currentUserReducer;


// Origiinal code prior to eslint warning,changed to eliminate compile warning, post using react-scripts 5.0.1
// export default (state = {}, action) => {

  // switch (action.type) {

    // case "SET_CURRENT_USER":
    // case "ADD_RESERVATION_TO_CURRENT_USER":
    // case "DELETE_RESERVATION_FROM_CURRENT_USER":
    // case "ADD_EDITED_USER_TO_CURRENT_USER":

      // return action.user

    // case "CLEAR_CURRENT_USER":
      // return {}

    // default:
      // return state

    // }
// }
