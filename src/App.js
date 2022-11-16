import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './Login.js';
import Home from './Home.js';
import Topics from './Topics.js';
import Register from './Register.js';
import Product from './Product.js';
import Products from './Products.js';
import Saved from './Wishlist.js'
import ProductContext from './context/ProductContext.js'
import UserContext from './context/UserContext.js'
import WishlistContext from './context/WishlistContext.js'
import { useState, useMemo } from 'react';


function App() {
  const [prodCart, setProdCart] = useState()
  const [userLogged, setUserLogged] = useState()
  const [prodWishlist, setProdWishlist] = useState()

  // const providerValue = useMemo(() => ({ userLogged, setUserLogged }), [userLogged, setUserLogged])

  return (
    <div className="App">

      <ProductContext.Provider value={{ prodCart, setProdCart }}>
        <UserContext.Provider value={{ userLogged, setUserLogged }}>
          <WishlistContext.Provider value={{ prodWishlist, setProdWishlist }}>
            <Routes>
              <Route path='/' element={<Home />}>
                <Route path='saved' element={<Saved />} />
                <Route path='topics/:name' element={<Topics />} />
                <Route path='products' element={<Products />} />
              </Route>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='product/:category/:id' element={<Product />} />
            </Routes>
          </WishlistContext.Provider>
        </UserContext.Provider>
      </ProductContext.Provider>


    </div>
  );
}

export default App;
