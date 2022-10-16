import { Routes, Route } from 'react-router-dom';

import './App.css';
import './bootstrap/bootstrap.css';

import Loginmodule from './Components/Loginmodule';
import Login from './Components/Login';
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import MessageList from './Components/MessageList';
import Logout from './Components/Logout';
import About from './Components/About';
import Profile from './Components/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about-us" element={<About />} />
      <Route path="message-list" element={<MessageList />} />
      <Route path="profile" element={<Profile />} />
      {/* Authontication */}
      <Route path="/" element={<Loginmodule />} >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="logout" element={<Logout />} />
    </Routes>
  );
}

export default App;
