import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Themes from './components/Themes';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
// import Portfolio from './pages/portfoilio/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Themes/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='skill' element={<Skills/>}/>
      <Route path='contact' element={<Contact/>}/>

    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
