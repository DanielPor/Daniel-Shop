import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import ProductContext from './context/ProductContext'
import WishlistContext from './context/WishlistContext'


const productsUrl = 'http://localhost:8000/products'
const cartUrl = 'http://localhost:8000/cart'
const wishListUrl = 'http://localhost:8000/wishList'

function Product() {
    // const { prodCart, setProdCart } = useContext(ProductContext)
    // const { prodWishlist, setProdWishlist } = useContext(WishlistContext)
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const { category } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`${productsUrl}/${id}`)
            setProduct(data[0])
        }
        fetchData()
    }, [])

    const addTo = async (e) => {
        if (e.target.innerText === 'Add To Cart') {
            const { data } = await axios.post(cartUrl, product)
            alert(data)
        } else {
            const { data } = await axios.post(wishListUrl, product)
            alert(data)
        }
    }

    return (
        <div className='product' key={id}>
            <strong>{product.name}</strong> <br />
            {<img src={product.image} alt="photo" />} <br />
            <strong>Price:</strong>{product.price} <br />
            <strong>Color:</strong> {product.color} <br />
            <button onClick={addTo}>Add To Cart</button>
            <button onClick={addTo}>Wishlist</button>
            <button onClick={() => navigate(`/products?category=${category}`)}>back</button>
        </div>
    )
}

export default Product