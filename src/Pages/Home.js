import React from 'react' 
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Posts from '../Components/Posts'
import './Home.css'

const Home = () => {
  return (<> 
            <Header/>
        <div className='home'>   
            <Posts/>
            <Sidebar/>
        </div>
  </>)
}

export default Home