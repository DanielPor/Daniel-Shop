import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const productsUrl = 'http://localhost:8000/products'

function Product() {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`${productsUrl}/${id}`)
            return data[0]
        }
        fetchData().then(setProduct)
    }, [])

    return (
        <div className='product' key={id}>
            <strong>{product.name}</strong> <br />
            {<img src={product.image} alt="photo" />} <br />
            <strong>Price:</strong>{product.price} <br />
            <strong>Color:</strong> {product.color}
        </div>
    )
}

export default Product