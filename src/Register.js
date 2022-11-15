import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const usersURL = 'http://localhost:8000/users'

function Register() {
    const [newUser, setNewUser] = useState({ fullName: '', username: '', email: '', password: '', password2: '' })
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewUser({ ...newUser, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate(newUser))
        console.log(isSubmit);
        setIsSubmit(true)
    }

    const validate = (values, e) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if (!values.fullName) {
            errors.fullName = "fullName is required"
        }
        if (!values.username) {
            errors.username = "username is required"
        }
        if (!values.email) {
            errors.email = "email is required"
        } else if (!regex.test(values.email)) {
            errors.email = "this is not a valid email"
        }
        if (!values.password) {
            errors.password = "password is required"
        } else if (values.password.length < 4 && values.password.length > 15) {
            errors.password = 'password should contain between 4 and 15 characters'
        } else if (!/[0-9]/.test(values.password)) {
            errors.password = 'password should contain at least 1 number'
        } else if (values.password == values.password.toLowerCase()) {
            errors.password = 'password should contain at least 1 uppercase letter'
        }
        if (!values.password2) {
            errors.passwordRep = "repeat password is required"
        } else if (values.password2 !== values.password) {
            errors.passwordRep = "the repeat password isn't match"
        }
        return errors
    }

    const addUser = async (e) => {
        console.log(e.target.innerText);
        if (e.target.innerText === 'Register') {
            const { data } = await axios.post(usersURL, newUser)
            console.log(data);
        } else {
            navigate('/login')
        }
    }

    return (
        <div className='registerForm'>
            <form onSubmit={handleSubmit}>
                <h1>Register Page!</h1>
                <div className='regInputDiv'>
                    <label><strong>Full Name: </strong></label>
                    <input type="text" name="fullName" onChange={handleChange} /> <br />
                    <p>{errors.fullName}</p>
                </div>
                <div className='regInputDiv'>
                    <label><strong>Username: </strong></label>
                    <input type="text" name="username" value={newUser.username} onChange={handleChange} /> <br />
                    <p>{errors.username}</p>
                </div>
                <div className='regInputDiv'>
                    <label><strong>Email: </strong></label>
                    <input type="text" name="email" value={newUser.email} onChange={handleChange} /> <br />
                    <p>{errors.email}</p>
                </div>
                <div className='regInputDiv'>
                    <label><strong>Password: </strong></label>
                    <input type="text" name="password" value={newUser.password} onChange={handleChange} /> <br />
                    <p>{errors.password}</p>
                </div>
                <div className='regInputDiv'>
                    <label><strong>Repeat Password: </strong></label>
                    <input type="text" name="password2" value={newUser.password2} onChange={handleChange} /> <br />
                    <p>{errors.passwordRep}</p>
                </div>
                <button onClick={addUser}>{Object.keys(errors).length === 0 && isSubmit ? 'sign in' : 'Register'}</button>
                <span>{Object.keys(errors).length === 0 && isSubmit ? 'sign up successfully' : ''}</span>
            </form>
        </div>
    )
}

export default Register