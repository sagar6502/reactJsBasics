import "./App.css";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import Contact from "./Contact";
import { Routes, Route, Link } from "react-router-dom";
import ConvertIntoWaveArray from './Assets/ConvertIntoWaveArray.jpeg'
import ReactPlayer from "react-player/youtube";

// import logo from"./assets/logo.png"

import React from "react";
// import ReactPlayer from "react-player/youtube";

const App = () => {
  return (
    <div>
      <h1>React-Player Example</h1>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=JUNsMqN6bb0' />
  );
};

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <h1>Task: Add an image below</h1>
//       <img src={ConvertIntoWaveArray} alt="Logo" />
//     </div>
//   );
// };


// function App() {
//   return (
//     <div> 
//       <nav>
//         <Link to="/" className="nav-item">Homepage</Link>
//         <Link to="/about" className="nav-item">About Little Lemon</Link>
//         <Link to="/contact" className="nav-item">Contact</Link>
//       </nav>
//       <Routes> 
//         <Route path="/" element={<Homepage />}></Route>
//         <Route path="/about" element={<AboutLittleLemon />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>
//       </Routes>
//     </div>
//   );
// };

// function App() {
//   return (
    
//       <div className="App"> 
//        <nav className='nav'>
//           <Link to = "#" className='nav-item'>homePage</Link>
//           <Link to='#' className='nav-item'>About Me</Link>
//        </nav>
//        <Routes>
//           <Route path="/" element={<homePage />}></Route>
//           <Route path="/about-me" element={<aboutMePage />}></Route>
//        </Routes>
//       </div> 
//   );
// }


export default App;
