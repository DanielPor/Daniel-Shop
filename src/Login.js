import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const serverUsersUrl = 'http://localhost:8000/users/login'

function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loggedUser, setLoggedUser] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    //dont keep data in variable loggedUser
    const logIn = async () => {
        try {
            const { data } = await axios.post(serverUsersUrl, user)
            if (data[0].username === user.username) {
                console.log(data[0].fullName);
                setLoggedUser(data[0].fullName)
                console.log(loggedUser);
                navigate(`/`)
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="loginForm">
            <form onSubmit={handleSubmit}>
                <h1>Log In!</h1>
                <div className='loginInputDiv'>
                    <label><strong>User Name: </strong></label>
                    <input type="text" name="username" onChange={handleChange} required /> <br />
                </div>
                <div className='loginInputDiv'>
                    <label><strong>Password: </strong></label>
                    <input type="text" name="password" onChange={handleChange} required /><br />
                </div>
                <div className='loginInputDiv'>
                    <label><strong>Email: </strong></label>
                    <input type="text" name="email" onChange={handleChange} required /><br />
                </div>
                <button type='submit' onClick={logIn}>Log-In</button>
            </form>
        </div>
    )
}

export default Login