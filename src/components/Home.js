import React from 'react'
// import { NavLink }  from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
import Rooms from '../components/Rooms'



const Home = (props) => {
  // console.log("home:", props)
    return (

      <div className = "Home">


      <br/><br/>
        <h4 className = "text-center"> Welcome to The Barrton Reservation System </h4>
        <h4 className = "text-center"> Select a Room </h4>
        <br/>
      <Rooms rooms = {props.home.rooms}/>

      <br/>


    </div>
    )
  }


export default Home
