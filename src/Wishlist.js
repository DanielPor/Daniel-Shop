import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import WishlistContext from './context/WishlistContext'


const wishListUrl = 'http://localhost:8000/wishList'

function Wishlist() {
    const [prodsArr, setProdsArr] = useState([])
    // const { prodWishlist, setProdWishlist } = useContext(WishlistContext)

    // useEffect(() => {
    //     try {
    //         setProdsArr([...prodsArr, prodWishlist])
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }, [prodWishlist])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(wishListUrl)
            setProdsArr(data)
        }
        fetchData()
    }, [])

    return (
        <div className='wishList-container'>
            <h2>Wishlist</h2>
            <div className='wishlist-item'>
                {prodsArr.map((prod, index) => {
                    return (
                        <div key={index} className='wishList-item'>
                            {<img src={prod.image} alt="photo" />} <br />
                            <div className='wishListDetails'>
                                <span><strong>Name: </strong>{prod.name}</span> <br />
                                <span><strong>Price: </strong>{prod.price}</span> <br />
                                <span><strong>Color: </strong>{prod.color}</span> <br />
                                <strong>Amount: </strong> <input style={{ width: "3rem" }} type="number" name="amount" min={1} />
                                <div className='deleteBtn'>
                                    <button onClick={async () => {
                                        const { data } = await axios.delete(`${wishListUrl}/${prod.id}`)
                                        alert(data)
                                    }}>delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Wishlist