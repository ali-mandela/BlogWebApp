import './css/Sidebar.css'
import img from '../img/bg.jpg'

const Sidebar = () => {
  return (<>
    <section className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>About Me</span>
            <img src={img} alt="sidebar i"/>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>Catrgories</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>Geopolitics</li>
                <li className='sidebarListItem'>Geopolitics</li>
                <li className='sidebarListItem'>Geopolitics</li>
                <li className='sidebarListItem'>Geopolitics</li>
                <li className='sidebarListItem'>Geopolitics</li>
                <li className='sidebarListItem'>Geopolitics</li>
                <li className='sidebarListItem'>Geopolitics</li>
                <li className='sidebarListItem'>Geopolitics</li>
                 <li className='sidebarListItem'>Geopolitics</li>
                <li className='sidebarListItem'>Geopolitics</li>
                <li className='sidebarListItem'>Geopolitics</li>
                <li className='sidebarListItem'>Geopolitics</li>
            </ul>
        </div> <div className='sidebarItem'>
            <span className='sidebarTitle'>Follow us</span>
            <div className='sidebarSocial'>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-square-instagram"></i>
                <i className="fa-brands fa-react"></i>
                <i className="fa-solid fa-code"></i>
        </div>
        </div>

    </section>

  </>)
}

export default Sidebar