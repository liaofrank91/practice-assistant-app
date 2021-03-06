import axios from 'axios'

const AUTH_API_URL = '/api/users/'

// Register user
const register = async (userData) => {
    const response = await axios.post(AUTH_API_URL, userData)

    if (response.data) {
        // Create a repertoire for the user when they register for the first time
        await axios.post('/api/repertoire/create', userData)

        localStorage.setItem('user', JSON.stringify(response.data))        
    }
    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(AUTH_API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Logout user
const logout = () => localStorage.removeItem('user')

const authService = {
    register,
    logout,
    login
}

export default authService