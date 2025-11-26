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

function App() {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems(prev => {
      // თუ უკვე არსებობს, არ დაამატო
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev;

      // ახალი პროდუქტი, quantity = 1
      return [...prev, { ...item, quantity: 1 }];
    });
  };


  // პროდუქტის წაშლა
  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
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

        {/* აქ უკვე სწორად მიდის setOpenCart */}
        <Header setOpenCart={setOpenCart} openCart={openCart} totalItems={totalItems} />

        {/* Cart - only if openCart */}
        {openCart && <Cart setOpenCart={setOpenCart} items={cartItems}
          onRemoveItem={removeFromCart} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/birthdayPrograms" element={<BirthdayPrograms />} />
          <Route path="/heros" element={<Heros />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} cartItems={cartItems} />} />
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
