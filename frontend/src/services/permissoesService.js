import axios from 'axios';

export const pegarPermissoes = async () => {
        const response = await axios.get('http://localhost:8000/api/permissoes/')
        const data = response.data
        return data
    }
