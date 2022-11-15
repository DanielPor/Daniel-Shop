import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import UserContext from './context/UserContext.js'
import React, { useState, useContext } from 'react'
import Cart from './Cart'


function Header() {
    const { userLogged, setUserLogged } = useContext(UserContext)
    const [showCart, setShowCart] = useState(false)

    const openCart = () => {
        if (showCart === false) {
            setShowCart(true)
        } else {
            setShowCart(false)
        }
    }

    return (
        <div className='header'>
            {userLogged?.fullName}
            <span className='greet'>Hello, {userLogged ? `${userLogged[0].fullName}` : <Link to='/login'>Log-In</Link>} </span>
            <span className='greet'>{userLogged ? '' : <Link to='/register'>Register</Link>} </span>
            <span className='greet'> {userLogged ? <Link to='/login'>Log-out</Link> : ''} </span>
            <span className='cartIcon' >
                <FontAwesomeIcon icon={faCartShopping} onClick={openCart} />
            </span>
            {showCart ? <Cart /> : ''}
        </div >
    )
}

export default Header