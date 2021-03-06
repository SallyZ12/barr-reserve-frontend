import {resetSignupForm} from "../actions/signupForm"

// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const addUser = user => {
  return {
    type: "ADD_USER",
    user
  }
}


export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}




// asynchronous action creators

export const login = (credentials, history) => {
  // console.log("credentials:",credentials)
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
     .then(response => response.json())
     .then(user => {
       if(user.error) {
         alert(user.error)
       } else {
         dispatch(setCurrentUser(user))
         history.push('/')
       }
       })
       .catch(console.log)
  }
}

export const signup = (credentials, history) => {
  // console.log("signup credentials:",credentials)
  return dispatch => {
      const userInfo = {
        user: credentials
      }
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
     .then(response => response.json())
     .then(signup => {
       if(signup.error) {
         alert(signup.error)

       } else {
         dispatch(setCurrentUser(signup))
         dispatch(resetSignupForm())
         dispatch(addUser(signup))
         history.push('/')
       }
       })
       .catch(console.log)
  }
}

export const editUser = (user, history) => {

  return dispatch => {

      const userInfo = {
        user: user
      }

    return fetch(`http://localhost:3000/api/v1/users/${user.currentUserId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
     .then(response => response.json())
     .then(user => {
       if (user.error) {
         alert(user.error)
       } else {
       dispatch({type: "EDIT_USER", user: user})
       dispatch({type: "ADD_EDITED_USER_TO_CURRENT_USER", user:user})
       history.push(`/users/${user.id}`)
     }
   })
   }
  }


export const logout = (event, history) => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3000/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }

}


export const getCurrentUser = () => {
  // console.log("Dispatching Get Current User")
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      },
    })
      .then(response => response.json())
      .then(user => {
        if(user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
        }
      })
       .catch(console.log)
  }
}
