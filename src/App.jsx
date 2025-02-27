import './App.css'
import Landing from './components/landing'
import Move from './components/move'
import Navbar from './components/navbar'
import About from './components/about'

function App() {
  return (
    <div className='bg-gray-100 min-h-screen w-full'>
      <Navbar />
      <Landing />
      <Move />
      <About />
    </div>

  )
}

export default App
