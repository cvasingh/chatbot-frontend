import React, { useEffect, useState, useContext } from 'react'
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';
import { UtilsContect } from '../ContectsAPI/ContectsAPI'

export default function ChatBot() {
  const noti = useContext(UtilsContect);

  const [showBot, toggleBot] = useState(false);
  useEffect(() => {
    setTimeout(() => handleBotbutton(true), 1500)
  }, []);
  const handleBotbutton = (set) => {
    sessionStorage.getItem('login') ? toggleBot(set) : noti.addNewMessage('Please login to chat with bot', 'warning');
  }

  return (
    <div className='fullScreen'>
      {showBot &&
        <div className='chatBotDiv'>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            runInitialMessagesWithHistory
          />
        </div>}
      <button className='chatBotButton' onClick={() => handleBotbutton(!showBot)}>
        {showBot ? 'X' : 'Bot'}
      </button>
    </div>
  );

}
