import Navbar from './components/Navbar'
import Home from './components/Home'
import TechStocks from './components/TechStack'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Certification from './components/certification';
import Contact from './components/contact'
import Education from './components/education'
import Footer from './components/Footer'


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
