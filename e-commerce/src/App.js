import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Theme from './Components/Theme/Theme';
import Dresses from './Components/Dresses/Dresses';

function App() {
  return (
    <div className="App">
      
     <Header/>
     <Navbar />
     <Theme/>
     <Dresses/>
    </div>
  );
}

export default App;
