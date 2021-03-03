import axios from 'axios'



export const getAllUsers = () => axios.get('http://localhost:3005/users')
export const addUser = (user) => axios.post('http://localhost:3005/users', user )
export const deleteUser = () => axios.delete(`http://localhost:3005/users/${id}`)