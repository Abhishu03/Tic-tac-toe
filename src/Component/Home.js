import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'

function Home() {
  return (
   <div>
    <div className='button-holder'>
       <Link to = '/vscomputer'><button className='VSbutton'>VS Computer</button></Link>
       <Link to = '/vsplayer'><button className='VSbutton'>VS Player</button></Link>
    </div>
   </div>
  )
}

export default Home
