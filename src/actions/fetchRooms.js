export const displayRooms = rooms => {
  // console.log("action display:", rooms)
  return {
    type: "DISPLAY_ROOMS",
    rooms
  }
}




//asynchronous action creators
export function fetchRooms() {
  return dispatch => {
    return fetch ("http://localhost:3000/api/v1/rooms")
      .then(response => response.json())
      .then(rooms => dispatch(displayRooms(rooms))
    )
  }
}




  //.then(rooms => console.log(rooms))
