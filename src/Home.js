import React, { useState } from 'react'
import NavBar from './NavBar.js'
import Search from './Search.js';
import Header from './Header.js';
import Slider from './Slider.js';
// import useContext from 'react'

function Home() {

    return (
        <div className='home'>

            <Header />

            <h1 className='webNameTitle'>Daniel Store</h1>

            <Search />

            <h4>Home Page</h4>

            <NavBar />

            <Slider />

        </div>
    )
}

export default Home