import { useState } from 'react'
import './App.css'
import Services from './components/services/Services';
import Sadbar from './components/sadbar/Sadbar';
import Resume from './components/resume/Resume';
import Picing from './components/picing/Picing';
import Portifolio from './components/portifolio/Portifolio';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';



function App() {

  return (
    <>
    <div className='particulas'></div>
      <Sadbar />
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portifolio />
      <Picing />
      <Contact />
    </main>
    </>
  )
}

export default App
