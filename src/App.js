import Main from './component/Main/Main';
import Weather from './component/Weater/Weather';
import Login from './component/Login/Login';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/" element ={<Main/>}/>
                <Route path="/weather" element ={<Weather/>}/>
                {/* <Route path="/profile" element ={<Profile/>}/> */}
                <Route path="/login" element ={<Login/>}/>

            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
