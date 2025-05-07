import './App.css';
import Header from './components/Header/Header';
import Navs from './components/Navs/Navs';
import Dr from './components/DR/Dr';
import Teeth from './components/Teeth/Teeth';
import Services from './components/Services/Services';
import Advantages from './components/Advantages/Advantages';
import Dentist from './components/Dentist/Dentist';
import Price from './components/Price/Price';
import Book from './components/Book/Book';
import FAQ from './components/FAQ/FAQ';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';
import {useRef} from "react"

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const pricingRef = useRef();
  const contactRef = useRef();



  return (
    <div className="App">
      <Navs refs={{homeRef , aboutRef , servicesRef , pricingRef , contactRef}} />
      <Header refs={{homeRef }}/>
      <Dr refs={{ aboutRef }} />
      <Teeth />
      <Services refs={{servicesRef}}/>
      <Advantages/> 
      <Dentist/>
      <Price refs={{ pricingRef }}/>
      <Book/>
      <FAQ/>
      <Welcome/>
      <Footer refs={{contactRef}}/>
      </div>
  );
}


export default App;