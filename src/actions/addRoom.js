import {resetRoomForm} from "../actions/editRoom"


//asynchronous action creators
export const addRoom = (clubRoom, history) => {

  return (dispatch) => {

    const sendableRoomData ={
          room_name: roomData.roomName
        }

    fetch ('http://localhost:3000/api/v1/rooms', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(sendableRoomData)
    })
      .then(response => response.json())
      .then(room => {
        if(room.error) {
          alert(room.error)
      } else {
        dispatch({type: 'ADD_Room', payload: room})
        dispatch(resetRoomForm())
        history.push('/')

      }
    })
  }
}


// async action creator
export const editRoom = (room, history) => {

  return dispatch => {
    const sendableRoomData ={
          room_name: room.roomName
        }

  return fetch(`http://localhost:3000/api/v1/rooms/${room.roomId}`, {
    credentials: "include",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableRoomData)
    })
      .then(response => response.json())
      .then(room => {
        if (club.error) {
         alert(room.error)
       } else {
       dispatch({type: "EDIT_Room", room: room})
       history.push(`/rooms/${room.id}`)
     }
   })
   }
}
