import React from 'react'; 
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from  './components/Home';
import FormularioContato from './components/Contato';
import QuemSomos from './components/Quemsomos';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<FormularioContato />} />
          <Route path='/QUEMSER' element={<QuemSomos />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div> );
}

export default App;