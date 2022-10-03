 import './css/Post.css'
import img from '../img/bg.jpg'

const Post = () => {
  return (<>
    <div className='post'>
        <img src={img}
        alt="monday"/>
        <div className='postInfo'>
            <div className='postInfoCats'>
                <span className='postcat'>Life</span>
                <span className='postcat'>Monday</span>
                <span className='postcat'>Music</span>
            </div>
            <span className='postTitle'>
                Lorem Letraset Letraset
            </span>
            <hr/>
            <span className='postDate'> 1 hour date</span>
            <p className='postDesc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </p>
            
        </div>
    </div>
  </>)
}

export default Post