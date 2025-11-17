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

function App() {

  return (
    <div>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/birthdayPrograms" element={<BirthdayPrograms />} />
          <Route path="/heros" element={<Heros />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/otherProgram" element={<OtherPrograms />} />
          <Route path="/gallery" element={<Gallery />} />


        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
