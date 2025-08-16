import './Sidebar.css';
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';

export const Sidebar = () => {

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  return (
    <div className="sidebar">
      <div className='top'>
        <img onClick={() => setToggleSidebar(prev => !prev)} className='menu' src={assets.menu_icon} ult="" />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {toggleSidebar ? <p>New Chat</p> : null}
        </div>
        {toggleSidebar ?
          <div className="recent">
            <p className='recent-title'>Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 15)
                  } ...</p>
                </div>
              );
            })}
          </div>
          : null
        }
      </div>
      <div className='bottom'>
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {toggleSidebar ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {toggleSidebar ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {toggleSidebar ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

