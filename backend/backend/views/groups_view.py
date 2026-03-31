from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import Group
from api.serializers import (
    GrupoSerializer,
    GrupoPermissoesSerializer,
    GrupoPermissoesUpdateSerializer,
)


class GrupoListView(generics.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GrupoSerializer
    permission_classes = [AllowAny]


class GrupoPermissoesView(generics.RetrieveUpdateAPIView):
    queryset = Group.objects.prefetch_related("permissions")
    serializer_class = GrupoPermissoesUpdateSerializer
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        if self.request.method in ["PUT", "PATCH"]:
            return GrupoPermissoesUpdateSerializer
        return GrupoPermissoesSerializer
