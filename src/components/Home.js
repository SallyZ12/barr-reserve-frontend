import React from 'react'

import Rooms from '../components/Rooms'



const Home = (props) => {
  console.log("home:", props)
    return (

      <div className = "Home">

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
