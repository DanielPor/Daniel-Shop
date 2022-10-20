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
            <h1>PRODUCT</h1>
            {<img src={product.image} alt="photo" />} <br />
            <strong>Name:</strong>{product.name} <br />
            <strong>Price:</strong>{product.price}
        </div>
    )
}

export default Product