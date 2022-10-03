import React from 'react'
import './css/Header.css'
import img from '../img/bg.jpg' 

const Header = () => {
  return (<> 
    <section className='header'>
    <div className='headerTitles'>
        <span className='headerTitlesSm'>React & Node</span>
        <span className='headerTitlesLg'>Blog</span>

    </div>
    <img 
        className='headerBgImg'
        src={img}
        alt="background"
    />
    
    </section>
  </>)
}

export default Header
