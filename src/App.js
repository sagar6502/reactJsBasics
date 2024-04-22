import './App.css';
import Footer from './components/Footer'
import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Sidebar from './components/Sidebar';
import avatar from './avatar.jpeg';
import Card from './components/Card';
import Btn from './components/Btn';

function Logo(props){
  const userPic = <img src = {avatar}/>;
  return userPic;
}

// function App() {
//   return (
    
//       <div className="App"> 
//         <Nav name="Sagar" color="purple"/>
//         <Promo/>  
//         <Logo/>sss
//         <Intro1/>
//         <Intro2/>
//         <Intro3/>
//         <Sidebar/>
//         <Footer /> 
//       </div> 
//   );
// }

// function App() {
//   return (
//       <div className="App">
//           <h1>Task: Add three Card elements</h1>
//           <Card h2="First card's h2" h3="First card's h3" />
//           <Card h2="Second card's h2" h3="Second card's h3" />
//           <Card h2="Third card's h2" h3="Third card's h3" />
//       </div>
//     );
//   };

function App() {
  return (
      <div className="App">
          <Btn/>
      </div>
    );
};   

export default App;
