export const deleteUser = (userId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/${userId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(user => {
      if (user.error){
        alert(user.error)
      } else {
      (dispatch({type: 'DELETE_USER', payload: user}))
  }
})
}
}
