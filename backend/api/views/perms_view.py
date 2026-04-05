from rest_framework import generics
from django.contrib.auth.models import Permission
from api.serializers import PermissaoSerializer
from rest_framework.permissions import AllowAny


class PermissaoListView(generics.ListAPIView):
    queryset = Permission.objects.all()
    serializer_class = PermissaoSerializer
    permission_classes = [AllowAny]
