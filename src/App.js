import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './Login.js';
import Home from './Home.js';
import Topics from './Topics.js';
import Register from './Register.js';
import Product from './Product.js';
import Products from './Products.js';
import Saved from './Saved.js'


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='saved' element={<Saved />} />
          <Route path='topics/:name' element={<Topics />} />
          <Route path='/products' element={<Products />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='product/:id' element={<Product />} />
      </Routes>

    </div>
  );
}

export default App;
