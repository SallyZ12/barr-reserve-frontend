import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Logout from '../components/Logout'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const NavBar =  ({ currentUser }) => {

let admin1 = currentUser && currentUser.admin === "Yes"
console.log("NavBar- admin1", admin1)
  return (
    <div className="NavBar">
       {Object.keys(currentUser).length !== 0 ? <Logout/> : ""}
       {Object.keys(currentUser).length !== 0 ? <h4> Welcome, {currentUser.first_name} </h4> : "" }
       {Object.keys(currentUser).length !== 0 ? <p> <Link exact='true' to={`/users/${currentUser.id}`}>Reservations</Link></p> :""  }

       {Object.keys(currentUser).length !== 0 && admin1 ? <DropdownButton id="dropdown-basic-button" title="Admin">
       <Dropdown.Item href = {currentUser && admin1 ? "/rooms": null}>New Room </Dropdown.Item>
       <Dropdown.Item href = {currentUser && admin1 ? "/users": null}>Owners </Dropdown.Item>
       </DropdownButton> : ""}

    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log("MSTP-APP NavBar:", state.currentUserReducer)
  return {
    currentUser: state.currentUserReducer
  }
}

export default connect(mapStateToProps)(NavBar)
