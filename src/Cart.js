import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import ProductContext from './context/ProductContext'


const cartUrl = 'http://localhost:8000/cart'

function Cart() {
    // const { prodCart, setProdCart } = useContext(ProductContext)
    const [prodsArr, setProdsArr] = useState([])

    // useEffect(() => {
    //     try {
    //         setProdsArr([...prodsArr, prodCart])
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }, [prodCart])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(cartUrl)
            console.log(data);
            setProdsArr(data)
        }
        fetchData()
    }, [])


    return (
        <div className='cart-container'>
            <h2>Cart</h2>
            <div>
                {prodsArr.map((prod, index) => {
                    return (
                        <div key={index} className='cartItem'>
                            {<img src={prod.image} alt="photo" />} <br />
                            <div className='cartDetails'>
                                <span><strong>Name: </strong>{prod.name}</span> <br />
                                <span><strong>Price: </strong>{prod.price}</span> <br />
                                <span><strong>Color: </strong>{prod.color}</span> <br />
                                <strong>Amount: </strong> <input style={{ width: "3rem" }} type="number" name="amount" min={1} />
                                <div className='deleteBtn'>
                                    <button onClick={async () => {
                                        const { data } = await axios.delete(`${cartUrl}/${prod.id}`)
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

export default Cart