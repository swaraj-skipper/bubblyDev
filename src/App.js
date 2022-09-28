import './App.css';
import Login from './Components/Login';
import './Components/Login.css'
import './Components/Global.css'
import Navbar from './Components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Profile from './Components/Profile';


function App() {
  return (
    <div>
      <Router>
          <Navbar/>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/myProfile" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
