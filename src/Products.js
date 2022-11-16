import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ProductContext from './context/ProductContext'
import WishlistContext from './context/WishlistContext'

const productsUrl = 'http://localhost:8000/products'
const cartUrl = 'http://localhost:8000/cart'
const wishListUrl = 'http://localhost:8000/wishList'

function Products() {
    const [products, setProducts] = useState([])
    // const { prodWishlist, setProdWishlist } = useContext(WishlistContext)
    // const { prodCart, setProdCart } = useContext(ProductContext)

    //option 1: Using React Router 
    // const [searchParams, setSearchParams] = useSearchParams()
    // const category2 = searchParams.get("category")
    //option 2: Using URLSearchParams 
    const queryParams = new URLSearchParams(window.location.search)
    const category = queryParams.get("category")

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`${productsUrl}?category=${category}`)
            setProducts(data)
        }
        fetchData()
    }, [])


    return (
        <div className='products'>
            {products.map(prod => {
                return (
                    <div className='product' key={prod.id}>
                        <strong>{prod.name}</strong> <br />
                        <Link to={`/product/${category}/${prod.id}`}> <img src={prod.image} alt="photo" /> </Link> <br />
                        <strong>Price:</strong> {prod.price} <br />
                        <button onClick={async () => {
                            const { data } = await axios.post(cartUrl, prod)
                            alert(data)
                        }}>Add To Cart</button>
                        <button onClick={async () => {
                            const { data } = await axios.post(wishListUrl, prod)
                            alert(data)
                        }}>Wishlist</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Products