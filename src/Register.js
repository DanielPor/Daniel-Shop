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
        <div className='registerForm'>
            <form onSubmit={handleSubmit}>
                <h1>Register Page!</h1>
                <div className='inputDiv'>
                    <label><strong>Full Name: </strong></label>
                    <input type="text" name="fullName" onChange={handleChange} /> <br />
                </div>
                <div className='inputDiv'>
                    <label><strong>Username: </strong></label>
                    <input type="text" name="username" onChange={handleChange} /> <br />
                </div>
                <div className='inputDiv'>
                    <label><strong>Email: </strong></label>
                    <input type="text" name="email" onChange={handleChange} /> <br />
                </div>
                <div className='inputDiv'>
                    <label><strong>Password: </strong></label>
                    <input type="text" name="password" onChange={handleChange} /> <br />
                </div>
                <div className='inputDiv'>
                    <label><strong>Repeat Password: </strong></label>
                    <input type="text" name="password2" onChange={handleChange} /> <br />
                </div>
                <button onClick={addUser}>Register</button>
            </form>
        </div>
    )
}

export default Register