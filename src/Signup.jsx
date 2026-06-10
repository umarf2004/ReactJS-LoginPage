import { useState  } from 'react'

export const Signup = (props) => {
        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [confirmPassword, setConfirmPassword] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email: " + email + " Password: " + password)
        // Handle login logic here
    }

    return (
        <div className="form-container">
            <h1>Sign Up</h1>

            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="name"> Full Name: </label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" id="name" name="name" />

                <label htmlFor="email"> Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />

                <label htmlFor="password"> Password: </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type = "password" placeholder="Enter your password" id="password" name="password"/>

                <label htmlFor="confirmPassword"> Confirm Password: </label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type = "password" placeholder="Confirm your password" id="confirmPassword" name="confirmPassword"/>

                <button type="submit" id="signup-btn"> Sign Up </button>
            </form>
            Already have an account?
            <button onClick={() => props.onFormSwitch("login")} id="login-btn"> Login </button>
        </div>


    )
}
