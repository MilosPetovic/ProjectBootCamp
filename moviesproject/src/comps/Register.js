import { useState } from "react"

const Register = () => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const isValidReg = () => {
        if (username.length < 4 && password.length < 8 )
        return prompt('Password, Email or Username is invalid')
        
    }

    return (
        <div>
            <h2>Register</h2>
            <hr></hr>
            <input type ='text' onChange = {(e) => {
                setUsername(e.target.value)
            }} placeholder ='Set username'></input>
            <input type ='email ' onChange = {(e) => {
                setEmail(e.target.value)
            }} placeholder ='Set email '></input>
            <input type ='password' onChange = {(e) => {
                setPassword(e.target.value)
            }} placeholder ='Set password'></input>
            <button>Register</button>

        </div>
    )
}


export default Register