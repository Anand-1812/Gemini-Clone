import { assets } from '../../assets/assets';
import './Main.css';

export const Main = () => {
  return (
    <div className='main'>

      <div className='nav'>
        <p>Simple AI</p>
        <img src={assets.user_icon} />
      </div>

      <div className='main-container'>
        <div className='greet'>
          <p><span>Hello, Anand</span></p>
          <p>How can i help you today ?</p>
        </div>
        <div className='cards'>
          <div className='card'>
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} />
          </div>
          <div className='card'>
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} />
          </div>
          <div className='card'>
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} />
          </div>
          <div className='card'>
            <p>Improve the readbility of the following code</p>
            <img src={assets.code_icon} />
          </div>
        </div>
      </div>

      <div className='main-bottom'>
        <div className='search-box'>
          <input type='text' placeholder='What you wanna find out ?' />
          <div>
            <img src={assets.gallery_icon} alt='galler icon' />
            <img src={assets.mic_icon} alt='mic icon' />
            <img src={assets.send_icon} alt='send prompt icon' />
          </div>
        </div>
        <p className='bottom-info'>
          This AI may display inaccurate info, including about people, so double-check its responses. Your privacy and Simple AI
        </p>
      </div>

    </div>
  )
}

