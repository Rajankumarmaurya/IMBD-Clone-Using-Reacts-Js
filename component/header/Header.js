import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div className='Header'>
      <div className="headerLeft">
        <Link to="/"><img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
        <Link to="/movies/popular"style={{textDecoration:"none"}}><span>Popular</span></Link>
        <Link to="/movies/top_rated"style={{textDecoration:"none"}}><span>Top rated</span></Link>
        <Link to="/movies/upcoming"style={{textDecoration:"none"}}><span>Upcomig</span></Link>
      </div>
    </div>
  )
}

export default Header
