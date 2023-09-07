import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from './components/red';
import Blue from './components/blue';
import Home from './components/home';

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to={"/blue"}>BLUE</Link>
          <Link to={"/red"}>RED</Link>
          <Link to={"/home"}>HOME</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue/>}></Route>
            <Route path="/red" element={<Red/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
