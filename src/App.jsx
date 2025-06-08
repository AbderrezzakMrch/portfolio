import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import TechStocks from './components/TechStack.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Certification from './components/Certification.jsx';
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <div className="min-h-screen" id='home'>
    <Navbar/>
    <Home className="container m-auto"/>
    <TechStocks className="container m-auto"/>
    <About className="container m-auto"/>
    <Portfolio className="container m-auto"/>
    <Certification className="container m-auto"/>
    <Education className="container m-auto"/>
    <Contact className="container m-auto"/>
    <Footer className="container m-auto"/>
    </div>
  )
}

export default App
