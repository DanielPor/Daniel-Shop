import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const productsUrl = 'http://localhost:8000/products'

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(productsUrl)
            setProducts([...data]);
        }
        fetchData()
    }, [])


    return (
        <div className='products'>
            {products.map(prod => {
                return (
                    <div className='product' key={prod.id}>
                        <Link to={`/product/${prod.id}`}> <img src={prod.image} alt="photo" /> </Link>
                        <strong>Name:</strong>{prod.name}
                        Price:{prod.price}
                    </div>
                )
            })}
        </div>
    )
}

export default Products