import { useState } from 'react'


function Register() {
    const [newUser, setNewUser] = useState({ fullName: '', username: '', email: '', password: '' })


    const handleChange = (e) => {
        const { name, value } = e.target
        setNewUser({ ...newUser, [name]: value })
    }

    const handleSubmit = (e) => {

    }

    const addUser = (e) => {

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Register Page!</h1>
                <strong>Full Name:</strong> <input type="text" name="fullName" onChange={handleChange} /> <br />
                <strong>Username:</strong><input type="text" name="username" onChange={handleChange} /><br />
                <strong>Email:</strong><input type="text" name="email" onChange={handleChange} /><br />
                <strong>Password:</strong><input type="text" name="password" onChange={handleChange} /><br />
                <strong>Repeat Password:</strong><input type="text" name="password2" onChange={handleChange} /><br />

                <button onClick={addUser}>Register</button>
            </form>
        </div>
    )
}

export default Register