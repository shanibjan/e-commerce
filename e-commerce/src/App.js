import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Theme from './Components/Theme/Theme';
import Dresses from './Components/Dresses/Dresses';
import Products from './Components/Products/Products';
import Collections from './Components/Collections/Collections';
import Reviews from './Components/Reviews/Reviews'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      
     <Header/>
     <Navbar />
     <Theme/>
     <Dresses/>
     <Products/>
     <Collections/>
     <Reviews/>
     <Footer/>
    
    </div>
  );
}

export default App;
