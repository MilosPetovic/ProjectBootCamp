import { useState } from "react"
import { GetUsers } from "./Service"

const Login = ({ setUser }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <h2>Login</h2>
            <hr></hr>
            <input type='text' onChange={(e) => {
                setUsername(e.target.value)
            }} placeholder='Username...'></input>
            <input type='password' onChange={(e) => {
                setPassword(e.target.value)
            }} placeholder='Password...'></input>
            <button onClick={() => {
                GetUsers().then(result =>  {
                    let user = result.data.find(elem => elem.username === username && elem.password === password)
                })
            }}>Login</button>
        </div>
    )
}


export default Login