from rest_framework import serializers

from ..models.evento import Evento
from .cronograma_serializer import CronogramaSerializer


class EventoSerializer(serializers.ModelSerializer):
    cronogramas = CronogramaSerializer(many=True, read_only=True)

    class Meta:
        model = Evento
        fields = "__all__"
