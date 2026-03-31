import { useEffect, useMemo, useState } from 'react';
import { pegarGrupo, atualizarPermissoes } from '../services/groups_service';

export function useGroupPermissions(perms) {
    const [selectedGroupId, setSelectedGroupId] = useState('');
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [editingPermissions, setEditingPermissions] = useState(new Set());
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        async function fetchGroup() {
            if (!selectedGroupId) {
                setSelectedGroup(null);
                setEditingPermissions(new Set());
                return;
            }

            try {
                const group = await pegarGrupo(selectedGroupId);
                setSelectedGroup(group);
                const permIds = new Set(group.permissions.map((p) => p.id));
                setEditingPermissions(permIds);
                setMessage('');
            } catch (erro) {
                console.error('Falha ao buscar grupo:', erro);
                setSelectedGroup(null);
            }
        }

        fetchGroup();
    }, [selectedGroupId]);

    const [permsDoGrupo, permsNaoDoGrupo] = useMemo(() => {
        const doGrupo = perms.filter((p) => editingPermissions.has(p.id));
        const naoDoGrupo = perms.filter((p) => !editingPermissions.has(p.id));
        return [doGrupo, naoDoGrupo];
    }, [editingPermissions, perms]);

    const handleAddPermission = (permId) => {
        setEditingPermissions((prev) => new Set([...prev, permId]));
    };

    const handleRemovePermission = (permId) => {
        setEditingPermissions((prev) => {
            const next = new Set(prev);
            next.delete(permId);
            return next;
        });
    };

    const handleSave = async () => {
        if (!selectedGroupId) return;

        setLoading(true);
        try {
            const permissionIds = Array.from(editingPermissions);
            await atualizarPermissoes(selectedGroupId, permissionIds);
            setMessage({ type: 'success', text: 'Permissões salvas com sucesso!' });

            // atualiza grupo
            const group = await pegarGrupo(selectedGroupId);
            setSelectedGroup(group);

            setTimeout(() => setMessage(''), 3000);
        } catch (erro) {
            console.error('Falha ao salvar:', erro);
            setMessage({ type: 'danger', text: 'Erro ao salvar permissões' });
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        if (selectedGroup) {
            const permIds = new Set(selectedGroup.permissions.map((p) => p.id));
            setEditingPermissions(permIds);
            setMessage('');
        }
    };

    return {
        selectedGroupId,
        setSelectedGroupId,
        selectedGroup,
        permsDoGrupo,
        permsNaoDoGrupo,
        loading,
        message,
        setMessage,
        handleAddPermission,
        handleRemovePermission,
        handleSave,
        handleReset
    };
}