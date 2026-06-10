import { useState } from 'react'

export const Signup = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(`Welcome ${name}, your account has been created!`)
    }

    return (
        <div className="form-container">
            <h1>Sign Up</h1>

            {message && <p>{message}</p>}

            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="name"> Full Name: </label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" id="name" name="name" />

                <label htmlFor="email"> Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />

                <label htmlFor="password"> Password: </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password"/>

                <button type="submit" id="signup-btn"> Sign Up </button>
            </form>
            Already have an account?
            <button onClick={() => props.onFormSwitch("login")} id="login-btn"> Login </button>
        </div>
    )
}