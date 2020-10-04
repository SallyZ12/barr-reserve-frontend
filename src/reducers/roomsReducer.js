const initialState = { rooms: []}

export default function roomsReducer(state = initialState, action) {

  switch (action.type) {

    case 'DISPLAY_ROOMS':
     return {rooms: action.rooms}

     case 'ADD_ROOM':
       return {...state, rooms: [...state.rooms, action.payload]}

       case 'DELETE_ROOM':
      return {...state, rooms: state.rooms.filter(room=> room.id !== action.payload.id)}

     default:
      return state
  }
}
