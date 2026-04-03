from rest_framework import serializers
from django.contrib.auth.models import User, Group, Permission


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username"]


class UserGrupoSerializer(serializers.ModelSerializer):
    groups = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ["id", "username", "groups"]

    def get_groups(self, obj):
        from .groups_serializer import GrupoSerializer

        return GrupoSerializer(obj.groups.all(), many=True).data


class UserGrupoUpdateSerializer(serializers.ModelSerializer):
    group_id = serializers.PrimaryKeyRelatedField(
        queryset=Group.objects.all(), many=True, write_only=True, required=False
    )
    groups = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ["id", "username", "group_id", "groups"]

    def get_groups(self, obj):
        from .groups_serializer import GrupoSerializer

        return GrupoSerializer(obj.groups.all(), many=True).data

    def update(self, instance, validated_data):
        group_id = validated_data.pop("group_id", None)

        if group_id is not None:
            instance.groups.set(group_id)

        return super().update(instance, validated_data)


class UserPermissoesSerializer(serializers.ModelSerializer):
    permissions = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ["id", "username", "permissions"]

    def get_permissions(self, obj):
        from .perms_serializer import PermissaoSerializer

        return PermissaoSerializer(
            obj.user_permissions.all(), many=True
        ).data  # ✅ user_permissions


class UserPermissoesUpdateSerializer(serializers.ModelSerializer):
    permission_id = serializers.PrimaryKeyRelatedField(
        queryset=Permission.objects.all(), many=True, write_only=True, required=False
    )
    permissions = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ["id", "username", "permission_id", "permissions"]

    def get_permissions(self, obj):
        from .perms_serializer import PermissaoSerializer

        return PermissaoSerializer(obj.user_permissions.all(), many=True).data

    def update(self, instance, validated_data):
        permission_id = validated_data.pop("permission_id", None)
        if permission_id is not None:
            # aq q ele substitui as permissoes q o usuário tinha pelas novas dos ids
            instance.user_permissions.set(permission_id)
        # matando mosca com bazuka, mas faz parte: atualiza outros campos se houver
        return super().update(instance, validated_data)
