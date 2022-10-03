import './Register.css'
import {NavLink} from 'react-router-dom'

const Register = () => {
  return (<>
    <div className='Register'>
    <span className='RegisterTitle'>RegisterNNN</span>
        <form className='RegisterForm'>
        <label>User Name</label>
            <input type="twxt" placeholder="UserName"/>
            <label>Email</label>
            <input type="email" placeholder="Enter Your Email.."/>
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password"/>
            <button className='RegisterButton'>Register</button>
        </form>
        <button className='RegisterLoginButton'><NavLink className="NavLink" to="/Login">Login</NavLink></button>

    </div>
  </>)
}

export default Register