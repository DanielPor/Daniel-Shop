import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import UserContext from './UserContext.js'

const productsURL = 'http://localhost:8000/products'

function Search() {
    const [searchedProd, setSearchProd] = useState('')
    // const { val, setVal } = useContext(UserContext)
    const navigate = useNavigate()


    const handleSearch = async (e) => {
        const { data: dataByName } = await axios.get(`${productsURL}?name=${searchedProd}`)
        navigate(`/product/${dataByName[0].id}`)

        // const { data: dataByCategory } = await axios.get(`${productsURL}?category=${searchedProd}`)
    }


    return (
        <div className='searchDiv'>
            <input type="text" className='search-bar' name="search" placeholder=' search something:' onChange={(e) => { setSearchProd(e.target.value) }} />
            <button className='btnSearch' onClick={handleSearch}>Search</button>
            {/* <div>{val}</div>
            <button onClick={() => setVal('hey')}>Change</button> */}
        </div>
    )
}

export default Search