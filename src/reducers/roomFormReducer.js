const initialState = {
  roomName: ""
}

export default (state = initialState, action) => {

  switch (action.type) {

    case "UPDATE_ROOM_FORM":
      return action.roomFormData

    case "SET_ROOM_FORM_DATA_FOR_EDIT":
      return action.roomFormData

    case "RESET_ROOM_FORM":
        return initialState

    default:
        return state
    }
}
