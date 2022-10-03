import './Login.css'
import {NavLink} from 'react-router-dom'

const Login = () => {
  return (<>
    <div className='login'>
    <span className='loginTitle'>LoginNNN</span>
        <form className='loginForm'>
            
            <label>Email</label>
            <input type="email" placeholder="Enter Your Email.."/>
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password"/>
            <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'><NavLink className="NavLink" to="/Register">Register</NavLink></button>

    </div>
  </>)
}

export default Login