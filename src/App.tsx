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
import { useState } from 'react'
import Cart from './Components/Cart'
import type { CartItem } from './types/cart'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems(prev => {
      const exists = prev.find(
        i => i.id === item.id && i.section === item.section
      );

      if (exists) return prev;

      return [...prev, { ...item, quantity: 1 }];
    });
  };



  // პროდუქტის წაშლა
  const removeFromCart = (id: string, section: string) => {
    setCartItems(prev =>
      prev.filter(item => !(item.id === id && item.section === section))
    );
  };




  // კალათაში ჯამური რაოდენობა
  const totalItems = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  {
    !openCart && (
      <Cart setOpenCart={setOpenCart} />
    )
  }

  return (
    <div>
      <BrowserRouter>

        {/* ✅ გვერდის შეცვლისას scroll ზემოთ */}
        <ScrollToTop />

        {/* აქ უკვე სწორად მიდის setOpenCart */}
        <Header setOpenCart={setOpenCart} openCart={openCart} totalItems={totalItems} />

        {/* Cart - only if openCart */}
        {openCart && <Cart setOpenCart={setOpenCart} items={cartItems}
          onRemoveItem={removeFromCart} />}

        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} cartItems={cartItems} />} />
          <Route path="/birthdayPrograms" element={<BirthdayPrograms addToCart={addToCart} cartItems={cartItems} />} />
          <Route path="/heros" element={<Heros addToCart={addToCart} cartItems={cartItems} />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} cartItems={cartItems} />} />
          <Route path="/otherProgram" element={<OtherPrograms addToCart={addToCart} cartItems={cartItems} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
