import logo from './logo.svg';
import './App.css';
import NavBar from './components/molecules/NavBar';
import './components/molecules/vedioheadder';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/molecules/footerbar';
import { BrowserRouter } from 'react-router-dom';
import Homepg from './pages/Home';
import VideoHeader from './components/molecules/vedioheadder';


function App() {
  return (
    
    <>
    
      <BrowserRouter>
      <NavBar/>
      <>
      <VideoHeader/>
      <Homepg />
      </>
       <Footer/>
      

       
      </BrowserRouter>
   
      </>

  );
};


export default App;

