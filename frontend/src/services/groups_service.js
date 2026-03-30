import axios from 'axios';

export const pegarGrupos = async () => {
        const response = await axios.get('http://localhost:8000/api/grupos/')
        const data = response.data
        return data
    }
