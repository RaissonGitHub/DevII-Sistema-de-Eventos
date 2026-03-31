import { useEffect, useState } from 'react';

import { pegarPermissoes } from '../services/perms_service';

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
    // console.log(perms)
    return { perms };
}