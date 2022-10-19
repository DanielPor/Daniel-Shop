import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Login from './Login.js';
import Home from './Home.js';
import Register from './Register.js';
import Header from './Header.js';
import Saved from './categories/Saved.js'
import Electronics from './categories/Electronics.js'
import Clothes from './categories/Clothes.js'
import Furniture from './categories/Furniture.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>



function App() {
  return (
    <div className="App">

      <Header />
      <h1>Daniel Store</h1>
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />

      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='saved' element={<Saved />} />
          <Route path='electronics' element={<Electronics />} />
          <Route path='clothes' element={<Clothes />} />
          <Route path='furniture' element={<Furniture />} />
          {/* <Route path='/topics/:name' element={<Saved />} /> */}
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
