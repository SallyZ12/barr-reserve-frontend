const initialState = { rooms: []}

export default function roomsReducer(state = initialState, action) {

  switch (action.type) {

    case 'DISPLAY_ROOMS':
     return {rooms: action.rooms}

     case 'ADD_ROOM':
       return {...state, rooms: [...state.rooms, action.payload]}

     case 'DELETE_ROOM':
      return {...state, rooms: state.rooms.filter(room=> room.id !== action.payload.id)}

      case "EDIT_ROOM":
        return {rooms: state.rooms.map(room => room.id === action.room.id ? action.room: room)}


        case 'ADD_RESERVATION_TO_ROOM':
          let maxResId1 = (Math.max(...action.payload.reservations.map(reservation => reservation.id)))

            let rooms1 = state.rooms.map(room => {
              if (room.room_name === (action.payload.reservations.find(reservation => reservation.id === maxResId1)).reservation_room) {
                room.room_res_date.push(action.payload.reservations.find(reservation => reservation.id === maxResId1))}
                return room
            })

          return {...state, rooms: rooms1}

          case 'DELETE_RESERVATION_FROM_ROOM':

          let rooms2 = state.rooms.map(room => {
              if (room.room_res_date.find(reservation => reservation.id === action.payload)) {
                    let new_rooms_array = room.room_res_date.filter(reservation => reservation.id !== action.payload)
                      room.reservations = new_rooms_array}

                return room
          })
          return {...state, rooms: rooms2}



     default:
      return state
  }
}
