export const deleteRoom = (roomId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/rooms/${roomId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(room => {
      if (room.error){
        alert(room.error)
      } else {
      (dispatch({type: 'DELETE_ROOM', payload: room}))
  }
})
}
}
