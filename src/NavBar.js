import { Link, Outlet } from 'react-router-dom'




function NavBar() {
    return (
        <div className='navbar'>
            <ul className='navLinks'>
                <li><Link to='saved'>saved</Link></li>
                <li><Link to='topics/electronics'>electronics</Link></li>
                <li><Link to='topics/clothes'>clothes</Link></li>
                <li><Link to='topics/furniture'>furniture</Link></li>
            </ul>

            <Outlet />
        </div>
    )
}

export default NavBar