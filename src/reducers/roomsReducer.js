const initialState = { rooms: []}

export default function roomsReducer(state = initialState, action) {

  switch (action.type) {

    case 'DISPLAY_ROOMS':
     return {rooms: action.rooms}

     default:
      return state
  }
}
