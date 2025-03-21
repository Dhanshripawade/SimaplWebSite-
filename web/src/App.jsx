import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './layout/header/Header'
import Homepage from './pages/home/Homepage'
import Howitworkspage from './pages/howitworks/Howitworkspage'
import Categories from './pages/Categories/Categories'
import FindaDesigner from './pages/FindaDesigner/FindaDesigner'
import Inspiration from './pages/inspiration/Inspiration'

import Footer from './layout/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/howitworkspage" element={<Howitworkspage/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path='/FindaDesigner' element={<FindaDesigner/>}/>
            <Route path='/inspiration' element={<Inspiration/>}/>
          </Routes>
          <Footer />
        </Router>
      
      
    </>
  )
}

export default App
