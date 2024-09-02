import React from 'react'
import "./Navbar.css"
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
const Navbar = () => {
  return (
    <> 
       <div class="sidebar">
    <div class="logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube Logo" />
      <h2>YouTube</h2>
    </div>
    <nav class="nav-links">
      <a href="#home" class="nav-item">Home</a>
      <a href="#trending" class="nav-item">Trending</a>
      <a href="#subscriptions" class="nav-item">Subscriptions</a>
      <a href="#library" class="nav-item">Library</a>
      <a href="#history" class="nav-item">History</a>
      <a href="#your-videos" class="nav-item">Your Videos</a>
      <a href="#watch-later" class="nav-item">Watch Later</a>
    </nav>
  </div>

    </>
  )
}

export default Navbar
