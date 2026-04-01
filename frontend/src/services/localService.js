import axios from 'axios';
import { pegarTokenCsrf } from './csrfService';


export const pegarLocais = async () => {
        const response = await axios.get('http://localhost:8000/api/locais/')
        const data = response.data
        return data
    }


export const pegarLocal = async (id) => {
    if (!id) return null;
    const response = await axios.get(`http://localhost:8000/api/locais/${id}/`);
    return response.data;
};


// fazer o atualizar