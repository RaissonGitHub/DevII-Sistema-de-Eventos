from rest_framework import serializers
from django.contrib.auth.models import User, Group


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
