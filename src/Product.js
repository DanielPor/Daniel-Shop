import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductContext from './context/ProductContext'
import WishlistContext from './context/WishlistContext'


const productsUrl = 'http://localhost:8000/products'

function Product() {
    const { prodCart, setProdCart } = useContext(ProductContext)
    const { prodWishlist, setProdWishlist } = useContext(WishlistContext)
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`${productsUrl}/${id}`)
            setProduct(data[0])
        }
        fetchData()
    }, [])

    return (
        <div className='product' key={id}>
            <strong>{product.name}</strong> <br />
            {<img src={product.image} alt="photo" />} <br />
            <strong>Price:</strong>{product.price} <br />
            <strong>Color:</strong> {product.color} <br />
            <button onClick={() => setProdCart(product)}>Add To Cart</button>
            <button onClick={() => setProdWishlist(product)}>Wishlist</button>
        </div>
    )
}

export default Product