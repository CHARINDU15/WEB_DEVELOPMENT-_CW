import logo from './logo.svg';
import './App.css';
import NavBar from './components/molecules/NavBar';
import Footer from './components/molecules/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}
const FApp = () => {
  return (
    <div className='App'>
      
      <Footer></Footer >
    </div>
  );
};

export default App;
