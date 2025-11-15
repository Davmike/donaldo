import './index.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import BirthdayPrograms from './Components/BirthdayPrograms'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/birthdayPrograms" element={<BirthdayPrograms />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
