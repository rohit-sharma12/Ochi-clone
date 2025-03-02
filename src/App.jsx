import './App.css'
import Landing from './components/landing'
import Move from './components/move'
import Navbar from './components/navbar'
import About from './components/about'
import Eye from './components/eye'
import Featured from './components/featured'
import Cards from './components/cards'
import Footer from './components/footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-gray-100 min-h-screen w-full'>
      <Navbar />
      <Landing />
      <Move />
      <About />
      <Eye />
      <Featured />
      <Cards />
      <Footer />
    </div>

  )
}

export default App
