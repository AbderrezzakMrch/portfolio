import Navbar from './components/Navbar'
import Home from './components/Home'
import TechStocks from './components/TechStack'
import About from './components/About'




function App() {

  return (
    <div className="min-h-screen">
    <Navbar/>
    <Home className="container m-auto"/>
    <TechStocks className="container m-auto"/>
    <About className="container m-auto"/>
    </div>
  )
}

export default App
