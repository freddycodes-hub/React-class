import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const name = "signup" 
    const [user, setUser] = useState("Freddy")


    const lightMode =() => {
      addEventListener('click', ()=>{
        document.getElementById("dark").style.background = "white"
        document.getElementById("text").style.color = "black" 
      })
    }
    const darkMode =() => {
      addEventListener('click', ()=>{
        document.getElementById("dark").style.background = "#333333"
        document.getElementById("text").style.color = "white" 

      })
    }


  return (
    <div className='nav' id='dark'>
        <button onClick={darkMode} id='mode1'>DARKMODE</button>
      <h1 className='nav-head' id='text'>~MOVIES-HUB~</h1>
        <button onClick={lightMode} id='mode2'>LIGHTMODE</button>




        {/* <p>Logo</p>
        <div className='links'>
            <a href="">Home</a>
            <a href="">About</a>
        </div>

        <div className='greet'>
            <p>Hello, {name}</p>
            <button>Register</button>       
            <button>Signup</button>
        </div> */}
    </div>
  )
}

export default Navbar