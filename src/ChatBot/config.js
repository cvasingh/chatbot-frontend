import { createChatBotMessage } from 'react-chatbot-kit';
import chatbotAvatar from '../assets/chatbotAvatar.jpg';

const botName = 'ChatBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#026c62',
    },
    chatButton: {
      backgroundColor: '#026c62',
    },
  },
  customComponents: {
    botAvatar: (props) => <img src={chatbotAvatar} alt='bot-avatar' width='40px' height='40px' style={{marginRight:'7px'}}/>,
  }
};

export default config;