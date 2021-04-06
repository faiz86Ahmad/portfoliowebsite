import React ,{useEffect}from 'react';
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import{ BrowserRouter,Route} from "react-router-dom"
import Home from "./components/webpages/Home.js"
import About from "./components/webpages/About.js"
import Portfolio from "./components/webpages/Portfolio.js"
import Contact from "./components/webpages/Contact.js"
import Navbar from "./components/Navbar.js"




const App = () => {


 useEffect(() => {
  Aos.init({
    duration:1000
  });
   
 }, [])
  return (
     <div>
     <BrowserRouter>
    
     <div className="menus primaryColor navbar">
       <Navbar/>
             </div>
              
                <Route  exact path="/" component={Home} />
                <Route  exact path="/about" component={About} />
                <Route  exact path="/portfolio" component={Portfolio} />
                <Route  exact path="/contact" component={Contact} />
       </BrowserRouter>
    
                
  
    
     
     </div>
     
    
   
  )
}

export default App;

