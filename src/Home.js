import React from 'react'
import NavBar from './NavBar.js'
import Search from './Search.js';
import Header from './Header.js';

function Home() {
    return (
        <div className='home'>

            <Header />

            <h1 className='webNameTitle'>Daniel Store</h1>

            <Search />

            <h4>Home Page</h4>

            <NavBar />

        </div>
    )
}

export default Home