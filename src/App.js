import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import homePage from './HomePage'
import aboutMePage from './AboutMe'

function Heading() { 
  return ( 
    <h1>This is an h1 heading.</h1> 
  ) 
} 
 
// function App() { 
//   return ( 
//     <div className="App"> 
//       This is the starting code for "My first component" ungraded lab 
//       <Heading /> 
//     </div> 
//   ); 
// } 

function App() {
  return (
    
      <div className="App"> 
       <nav className='nav'>
          <Link to = "#" className='nav-item'>homePage</Link>
          <Link to='#' className='nav-item'>About Me</Link>
       </nav>
       <Routes>
          <Route path="/" element={<homePage />}></Route>
          <Route path="/about-me" element={<aboutMePage />}></Route>
       </Routes>
      </div> 
  );
}


export default App;
