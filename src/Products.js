import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const productsUrl = 'http://localhost:8000/products'

function Products() {
    const [products, setProducts] = useState([])
    const { category } = useParams()

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
                if (prod.category === category) {
                    return (
                        <div className='product' key={prod.id}>
                            {console.log(prod.category)}
                            <Link to={`/product/${prod.id}`}> <img src={prod.image} alt="photo" /> </Link>
                            <strong>Name:</strong>{prod.name}
                            Price:{prod.price}
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Products