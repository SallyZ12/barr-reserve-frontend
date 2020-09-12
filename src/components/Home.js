import React from 'react'
import { NavLink }  from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Rooms from '../components/Rooms'



const Home = (props) => {
  console.log("home:", props)
    return (

      <div className = "Home">
      <Button variant="outline-primary"><NavLink exactclassname="current" to="/signup">Register</NavLink></Button>
      <Button variant="outline-primary"><NavLink exactclassname="current" to="/login">Login</NavLink></Button>
        <h2 className = "text-center"> Welcome to The Barrton Reservation System </h2>
        <h6 className = "text-center"> Register/Login To Begin </h6>
        <h4 className = "text-center"> Select a Room </h4>
        <br/>
      <Rooms rooms = {props.home.rooms}/>
      <br/>


    </div>
    )
  }


export default Home
