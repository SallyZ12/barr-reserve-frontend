import React from 'react'
import {Link} from 'react-router-dom'


const Users = ({users}) => {

function sortByName(data) {
  return data.sort(function(a,b) {
    let nameA = a.first_name
    let nameB = b.first_name
        let nameSort = nameA.localeCompare(nameB)
        return nameSort
      }
  )
}


return (

  <div>
    <h5> Registered - Count: {users.users.length} </h5>
     {users.users && sortByName(users.users).map(user =>
      <p key={user.id}>
      <Link to={`/users/${user.id}`}> {user.first_name} {user.last_name} -- {user.apartment}</Link>
    </p>)}
    </div>
  )
}
export default Users;
