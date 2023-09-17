import logo from './logo.svg';
import './App.css';
import NavBar from './components/molecules/NavBar';


import Footer from './components/molecules/footerbar';
import { BrowserRouter } from 'react-router-dom';
import Homepg from './pages/Home';


function App() {
  return (
    <>
    
      <BrowserRouter>
      <NavBar/>
      <main>
      <Homepg />
      </main>
       <Footer/>
      

       
      </BrowserRouter>
   
      </>

  );
};


export default App;

