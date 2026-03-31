import { useEffect, useState } from 'react';

import { pegarTokenCsrf } from '../services/csrfService';

export function useCsrf() {
    const [csrfToken, setCsrfToken] = useState('');
    useEffect(() => {
        async function fetchCsrfToken() {
            try {
                const data = await pegarTokenCsrf();
                setCsrfToken(data?.csrfToken || '');
            } catch (erro) {
                console.error('erro', erro);
            }
        }
        fetchCsrfToken();
    }, []);

    return { csrfToken };
}
