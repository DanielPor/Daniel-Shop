import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function Header() {
    const { fullName } = useParams('')

    return (
        <div className='header'>
            <span className='greet'>Hello, <Link to='/login'>Log-In</Link> or <Link to='/register'>Register</Link></span>
            <span className='cartIcon'>
                <FontAwesomeIcon icon={faCartShopping} />
            </span>
        </div >
    )
}

export default Header