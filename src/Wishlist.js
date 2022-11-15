import React, { useContext, useState, useEffect } from 'react'
import WishlistContext from './context/WishlistContext'

function Wishlist() {
    const { prodWishlist, setProdWishlist } = useContext(WishlistContext)
    const [prodsArr, setProdsArr] = useState([])

    useEffect(() => {
        try {
            setProdsArr([...prodsArr, prodWishlist])
        } catch (err) {
            console.log(err);
        }
    }, [prodWishlist])


    return (
        <div className='wishList'>
            <h2>Wishlist</h2>
            <div className='wishlist-item'>
                {prodsArr.map((prod, index) => {
                    return (
                        <div key={index} className='wishList-item'>
                            <span><strong>Name: </strong>{prod.name}</span> <br />
                            <span><strong>Price: </strong>{prod.price}</span> <br />
                            <span><strong>Color: </strong>{prod.color}</span> <br />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Wishlist