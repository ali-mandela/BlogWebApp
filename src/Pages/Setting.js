import './Setting.css'
import Sidebar from '../Components/Sidebar'
import ppp from '../img/bg.jpg'

const Setting = () => {
  return (<>
  <div className='setting'>
    <div className='settingWrapprr'>
    <div className='settingTitle'>
        <span className='settingUpdateTitle'>Update Your Account</span>
        <span className='settingDeleteTitle'>Delete Account</span>
    </div>
    <form className='settingForm'>
        <label>Profile Picture </label>
        <div className='settingProfilePicture'>
            <img src={ppp}  
            alt='current profile '
            />
            <label for="fileInput"><i className=" settingProfilePictureIcon fa-2x fa-solid fa-camera"></i></label>
            <input style={{display:"none"}} type={"file"} id="fileInput" />
        </div>
        <label>User Name</label>
        <input type="text" placeholder="Muhamad Ali"/>
        <label>Email</label>
        <input type="email" placeholder="Email"/>
        <label>PassWord</label>
        <input type="password"/>
        <button className='settingUpdate'>Update </button>
    </form>
    </div>
    <Sidebar/>
  </div>
  </>)
}

export default Setting