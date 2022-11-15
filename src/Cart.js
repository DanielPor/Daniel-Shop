import React, { useContext, useEffect, useState } from 'react'
import ProductContext from './context/ProductContext'


function Cart() {
    const { prodCart, setProdCart } = useContext(ProductContext)
    const [prodsArr, setProdsArr] = useState([])

    useEffect(() => {
        try {
            setProdsArr([...prodsArr, prodCart])
        } catch (err) {
            console.log(err);
        }
    }, [prodCart])

    return (
        <div className='cart-container'>
            <h2>Cart</h2>
            <div>
                {prodsArr.map((prod, index) => {
                    return (
                        <div key={index} className='cartItem'>
                            <span><strong>Name: </strong>{prod.name}</span> <br />
                            <span><strong>Price: </strong>{prod.price}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart