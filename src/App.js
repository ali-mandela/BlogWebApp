import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Setting from './Pages/Setting';
import Single from './Pages/Single';
import Write from './Pages/Write';
import {Route, Routes} from 'react-router-dom'


function App() {
  const user = true;
  return (<>
  <Navbar/>
  <Routes>

      <Route path='/' element={user ? <Home/> : <Register/>} />
      <Route path='/Register' element={user ?<Home/> :<Register/>} />
      <Route path='/Login' element={user ? <Home/> :<Login/>} />
      <Route path='/Write' element={user ?<Write/> : <Register/>} />
      <Route path='/Setting' element={user ?<Setting/> : <Register/>} />
      <Route path='/Post/:PostId'  element={<Single/>} />
      </Routes>
  
  {/* <Home/> */}
  {/* <Single/> */}
  {/* <Write/> */}
  {/* <Setting/> */}
  {/* <Login/>
  <Register/> */}
  </>);
}

export default App;
