import Footer from './components/Footer/Footer';
import NavBar from './components/Nav/Nav';
import Section_1 from './components/Sections/Section1';
import Section_2 from './components/Sections/Section2';
import Section_3 from './components/Sections/Section3';
import Section_4 from './components/Sections/Section4';
import Section_5 from './components/Sections/Section5';
import './App.css'
function App() {
  return (
    <div className='App'>
    
    <Section_1/>
    <NavBar/>
    <Section_2/>
    <Section_3/>
    <Section_4/>
    <Section_5/>
    <Footer/>
    </div>
  );
}

export default App;
