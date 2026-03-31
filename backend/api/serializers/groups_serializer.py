from rest_framework import serializers
from django.contrib.auth.models import Group, Permission
from .perms_serializer import PermissaoSerializer


class GrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ["id", "name"]


class GrupoPermissoesSerializer(serializers.ModelSerializer):
    permissions = PermissaoSerializer(many=True, read_only=True)

    class Meta:
        model = Group
        fields = ["id", "name", "permissions"]


class GrupoPermissoesUpdateSerializer(serializers.ModelSerializer):
    permission_id = serializers.PrimaryKeyRelatedField(
        queryset=Permission.objects.all(), many=True, write_only=True, required=False
    )
    permissions = PermissaoSerializer(many=True, read_only=True)

    class Meta:
        model = Group
        fields = ["id", "name", "permission_id", "permissions"]

    def update(self, instance, validated_data):
        print(instance)
        print(validated_data)
        permission_id = validated_data.pop("permission_id", None)

        if permission_id is not None:
            instance.permissions.set(permission_id)

        return super().update(instance, validated_data)
