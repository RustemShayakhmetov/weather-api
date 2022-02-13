import Main from './component/Main/Main';
import Weather from './component/Weater/Weather';
import Login from './component/Login/Login';
import Profile from './component/Profile/Profile';
import Nav from './component/Nav/Nav';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
        <Nav/>
            <Routes>
                <Route path="/" element ={<Main/>}/>
                <Route path="/weather" element ={<Weather/>}/>
                <Route path="/profile" element ={<Profile/>}/>
                <Route path="/login" element ={<Login/>}/>

            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
