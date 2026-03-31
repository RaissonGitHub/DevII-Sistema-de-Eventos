import { useEffect, useState } from 'react';

import { pegarPermissoes } from '../services/permissoesService';

export function usePermissoes() {
    const [perms, setPerms] = useState([]);
    useEffect(() => {
        async function fetchPerms() {
            try {
                const data = await pegarPermissoes();
                setPerms(data);
            } catch (erro) {
                console.error('erro', erro);
            }
        }
        fetchPerms();
    }, []);
    return { perms };
}