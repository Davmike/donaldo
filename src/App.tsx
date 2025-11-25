import './index.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import BirthdayPrograms from './Components/BirthdayPrograms'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heros from './Components/Heros'
import Menu from './Components/Menu'
import OtherPrograms from './Components/OtherPrograms'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
// import { useState } from 'react'
// import Cart from './Components/Cart'

function App() {
  // const [openCart, setOpenCart] = useState<boolean>(false);


  // {
  //   !openCart && (
  //     <Cart />
  //   )
  // }

  return (
    <div>
      <BrowserRouter>

        {/* აქ უკვე სწორად მიდის setOpenCart */}
        <Header />

        {/* Cart - only if openCart */}
        {/* {openCart && <Cart />} */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/birthdayPrograms" element={<BirthdayPrograms />} />
          <Route path="/heros" element={<Heros />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/otherProgram" element={<OtherPrograms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
