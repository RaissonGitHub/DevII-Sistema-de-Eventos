import axios from 'axios';

export const pegarTokenCsrf  = async () => {
    const response = await axios.get('http://localhost:8000/api/csrf/', { withCredentials: true })
    const data = response.data
    return data
    }
