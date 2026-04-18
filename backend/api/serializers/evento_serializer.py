from rest_framework import serializers

from ..models.evento import Evento
from .cronograma_serializer import CronogramaSerializer


class EventoSerializer(serializers.ModelSerializer):
    cronogramas = CronogramaSerializer(many=True, read_only=True)

    class Meta:
        model = Evento
<<<<<<< HEAD
        fields = ["id","nome","descricao","carga_horaria","setor","tema"]
    
    

=======
        fields = "__all__"
>>>>>>> 6ba585b (Mudando de brain..comite necessário)
