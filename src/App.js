import './App.css';
import Footer from './components/Footer'
import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Sidebar from './components/Sidebar';
import avatar from './avatar.jpeg';

function Logo(props){
  const userPic = <img src = {avatar}/>;
  return userPic;
}

function App() {
  return (
    
      <div className="App"> 
        <Nav name="Sagar" color="purple"/>
        <Promo/>  
        <Logo/>sss
        <Intro1/>
        <Intro2/>
        <Intro3/>
        <Sidebar/>
        <Footer /> 
      </div> 
  );
}

export default App;
