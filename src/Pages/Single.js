import './Single.css'
import Sidebar from '../Components/Sidebar'
import SinglePost from '../Components/SinglePost'

const Single = () => {
  return (<>
  <div className='single'>
        <SinglePost/>
        <Sidebar/>
  </div> 
  </>)
}

export default Single