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
import ModeToggler from './components/ModeToggler';
import Child from './components/Child';
import InputComponent from './components/InputComponent';
import RegisterForm from './components/RegisterForm';
import TextInputWithFocusButton from './components/TextInputWithFocusButton'

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

// function App() {
//   const date = new Date()
//   return (
//       <div>
//         <RegisterForm/ >
//       </div>
//     );
// };   

function App() {
  const date = new Date()
  return (
      <div>
        <TextInputWithFocusButton/ >
      </div>
    );
};   

export default App;

// function App() {

//     function handleClick() {
//       let randomNum = Math.floor(Math.random() * 3) + 1;
//       console.log(randomNum);
//       let userInput = prompt('type a number');
//       alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
//     }
  
//     return (
//       <div>
//         <h1>Task: Add a button and handle a click event</h1>
//         <button onClick={handleClick}>Guess the number between 1 and 3</button>
//       </div>
//     );
//   }
  
//   export default App;
