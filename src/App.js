
import About from './pages/Aboutme';
import './App.css';
import Header from './components/Header';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <div className="App">
        <Header />
        {
          window.location.pathname.includes("/Aboutme") ?   <About />
          : window.location.pathname.includes("/Portfolio") ?  <Portfolio />
          : window.location.pathname.includes("/Contact") ? <Contact />
          :  <About />
        }
      
       
        
    </div>
  );
}

export default App;
