import './css/SinglePost.css'
import fullImage from '../img/bg.jpg'

const SinglePost = () => {
  return (<>
        <div className='singlePost'>  
        <div className='singlePostWrapper'>
          <img className='singlePostImg' src={fullImage}alt=''/>
          <h1 className='singlePostTitle'>Lorem Lipsum
          <div className='singlePostEdit'>
          <i className=" singlePostIcon fa-solid fa-trash"></i>
          <i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
          </div>
          </h1>
          <div className='singlePostInfo'>
            <span className='singlePostAuthor'>Author : <b> Muhammad Ali</b></span>
            <span className='singlePostDate'>1 hour ago</span>
          </div>
          <p className='singlePostDesc'>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
          

        </div>
        </div>
  </>)
}

export default SinglePost