import './Write.css'
import img from '../img/bg.jpg'
const Write = () => {
  return (<>
  <div className='write'>
  <img className='writeImg' src={img} alt="imagembfbj"/>
    <form className='writeForm'>
        <div className='writeFormGroup'>
        <label for="fileInput"> <i className=" writeIcon fa-solid fa-image"></i> </label>
            <input style={{display:"none"}} type={"file"} id="fileInput" />
            <input type={"text"} placeholder="Title" className='writeInput' autoFocus={true}/>

        </div>
        <div className='writeFormGroup'>
            <textarea className='writeInput writeText' placeholder='Tell Your Story..' type={"text"}/>
        </div>
        <button className='writeSubmit' type='submit'>Publish</button>
    </form>
  </div>
  </> )
}

export default Write