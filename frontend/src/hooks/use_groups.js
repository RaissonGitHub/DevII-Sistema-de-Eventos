import { useEffect, useState } from 'react';

import { pegarGrupos } from '../services/groups_service';

export function useGrupos() {
    const [grupos, setGrupos] = useState([]);
    useEffect(() => {
        async function fetchGrupos() {
            try {
                const data = await pegarGrupos();
                setGrupos(data);
            } catch (erro) {
                console.error('erro', erro);
            }
        }
        fetchGrupos();
    }, []);
    // console.log(grupos)
    return {grupos};
}
