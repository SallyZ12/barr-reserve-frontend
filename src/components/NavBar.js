import React from 'react'
import { connect } from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import Logout from '../components/Logout'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'
//test 


const NavBar =  ({ currentUser }) => {

let admin1 = currentUser && currentUser.admin === "Yes"
// console.log("NavBar- admin1", admin1)
  return (
    <div className="NavBar">

       {Object.keys(currentUser).length === 0 ? <Button variant='light'> <NavLink exact activeClassName="current" to="/login">Login</NavLink></Button> : ""}
       {Object.keys(currentUser).length === 0 ? <Button variant='light'> <NavLink exact activeClassName="curent" to="/signup"> Signup</NavLink></Button>: " "}
       {Object.keys(currentUser).length !== 0 ? <Logout/> : ""}
       {Object.keys(currentUser).length !== 0 ? <h4> Welcome, {currentUser.first_name} </h4> : "" }
       {Object.keys(currentUser).length !== 0 ? <p> <Link exact='true' to={`/users/${currentUser.id}`}>Reservations</Link></p> :""  }

       {Object.keys(currentUser).length !== 0 && admin1 ?

      <> ADMIN FUNCTIONS <br/> <Link exact='true' to={"/rooms"}>New Room </Link><br/>
       <Link exact='true' to={"/users"}>Owners </Link>
     </>
      :""}<br/><br/><br/>

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
