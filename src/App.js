import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import Header from './components/Header'



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />}/>

      </Routes>
    </>
  )
}

export default App;