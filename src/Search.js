import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const productsURL = 'http://localhost:8000/products'

function Search() {
    const [searchProd, setSearchProd] = useState('')
    const [prod, setProd] = useState({})
    const [searchCategory, setSearchCategory] = useState('')
    const navigate = useNavigate()


    const handleSearch = async (e) => {
        const { data } = await axios.get(`${productsURL}?name=${searchProd}`)
        navigate(`/product/${data[0].id}`)
        // navigate(`/products?name=${searchProd}`)
    }


    return (
        <div className='searchDiv'>
            <input type="text" className='search-bar' name="search" placeholder='search something:' onChange={(e) => { setSearchProd(e.target.value) }} />
            <button className='btnSearch' onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search