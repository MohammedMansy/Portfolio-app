import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Experices from "./components/Experices/Experices";
import Sectionportfolio from "./components/portfolio/portfolio";
import Contact from "./components/Contact/contact";


function App() {
  return (
    <Router>
       <Navbar/> 
       <Header/>
       <About/>
       <Services/>
       <Experices/>
       <Sectionportfolio/>
       <Contact/>
     </Router>
  );
}

export default App;
