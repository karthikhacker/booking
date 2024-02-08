
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Details from './pages/details';

function App() {

  return (
    <BrowserRouter>
      <div className='w-[1200px] m-auto'>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:hotelId" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
