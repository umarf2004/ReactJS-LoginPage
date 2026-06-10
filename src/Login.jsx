import React, { useState} from "react"
export const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email: " + email + " Password: " + password)
        // Handle login logic here
    }

    return (

        <div className="form-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email"> Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />

                <label htmlFor="password"> Password: </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type = "password" placeholder="Enter your password" id="password" name="password"/>

                <button type="submit" id="login-btn"> Login </button>
            </form>
            Dont have an account?
            <button onClick={() => props.onFormSwitch("signup")} id="signup-btn"> Sign Up </button>
        </div>


    )
}
