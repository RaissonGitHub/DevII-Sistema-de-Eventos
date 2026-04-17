from rest_framework import serializers
from ..models.evento import Evento


class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = ["id","nome","descricao","carga_horaria","setor","tema"]
    
    

