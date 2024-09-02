import React from 'react'
import "./Home.css"
import { FaUserAlt } from "react-icons/fa";
import img from '../src/image/7328.jpg'
import { FaBell } from "react-icons/fa6";
const Home = () => {
  return (
    <>
         <header>
    <div class="header-container">
      <div class="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div class="header-icons">
        {/* <i><FaBell /></i> */}
        <i><FaUserAlt /></i>
      </div>
    </div>
  </header>

  <main>
  <div className="hello">
    <div class="video-grid">
      <div class="video-card">
        <img src={img} alt="Video Thumbnail" />
        <div class="video-info">
          <h3>Video Title</h3>
          <p>Channel Name</p>
          <p>1M views • 2 weeks ago</p>
        </div>
      </div>
    </div>
    <div class="video-grid">
      <div class="video-card">
        <img src={img} alt="Video Thumbnail" />
        <div class="video-info">
          <h3>Video Title</h3>
          <p>Channel Name</p>
          <p>1M views • 2 weeks ago</p>
        </div>
      </div>
    </div>
    <div class="video-grid">
      <div class="video-card">
        <img src={img} alt="Video Thumbnail" />
        <div class="video-info">
          <h3>Video Title</h3>
          <p>Channel Name</p>
          <p>1M views • 2 weeks ago</p>
        </div>
      </div>
    </div>
    </div>
    <hello2>
    <div class="video-grid">
      <div class="video-card">
        <img src={img} alt="Video Thumbnail" />
        <div class="video-info">
          <h3>Video Title</h3>
          <p>Channel Name</p>
          <p>1M views • 2 weeks ago</p>
        </div>
      </div>
    </div>
    <div class="video-grid">
      <div class="video-card">
        <img src={img} alt="Video Thumbnail" />
        <div class="video-info">
          <h3>Video Title</h3>
          <p>Channel Name</p>
          <p>1M views • 2 weeks ago</p>
        </div>
      </div>
    </div>
    <div class="video-grid">
      <div class="video-card">
        <img src={img} alt="Video Thumbnail" />
        <div class="video-info">
          <h3>Video Title</h3>
          <p>Channel Name</p>
          <p>1M views • 2 weeks ago</p>
        </div>
      </div>
    </div>
    </hello2>
  </main>
    </>
  )
}

export default Home