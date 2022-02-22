import React from 'react';
import './App.css';

const  App = ()  => {
  return (
    <div className="app-wrapper">

      <header className='header'>
        <img
        src='https://icon-library.com/images/instagram-icon-24x24/instagram-icon-24x24-21.jpg'
        alt='instagram'
      />
      </header>

      <nav className='nav'>
        <div>
          <a href='#s'>Profile</a>
        </div>
        <div>
          <a href='#s'>Messages</a>
        </div>
        <div>
          <a href='#s'>News</a>
        </div>
        <div>
          <a href='#s'>Music</a>
        </div>
        <div>
          <a href='#s'>Settings</a>
        </div>
      </nav>

      <div className='content'>
        <img src='https://images.hdqwalls.com/download/anime-hoods-neko-ears-4k-uh-2560x1080.jpg'/>
      </div>
    </div>
  );
}

export default App;

