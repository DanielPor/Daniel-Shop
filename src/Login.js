import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const serverUsersUrl = 'http://localhost:8000/users/login'

function Login() {
    const [user, setUser] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const getIn = async () => {
        const { data } = await axios.post(serverUsersUrl, user)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Log In!</h1>
                User Name: <input type="text" name="username" onChange={handleChange} /> <br />
                Password: <input type="text" name="password" onChange={handleChange} /><br />
                Email: <input type="text" name="email" onChange={handleChange} /><br />
                <button type='submit' onClick={getIn}>Log-In</button>
            </form>
        </div>
    )
}

export default Login