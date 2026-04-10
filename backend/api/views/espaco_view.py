from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from ..models.espaco import Espaco
from ..serializers import EspacoSerializer


class EspacoListView(APIView):
    queryset = Espaco.objects.all()
    serializer_class = EspacoSerializer
    permission_classes = [AllowAny]  # modificar! permissão para admin

    def get(self, request, *args, **kwargs):
        espacos = Espaco.objects.all()
        serializer = EspacoSerializer(espacos, many=True)
        return Response(serializer.data)

    def post(self, request):
        dados = request.data
        serializer = EspacoSerializer(data=dados)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EspacoDetailView(APIView):
    # nível de objetos: espaco específico
    permission_classes = [AllowAny]  # modificar! permissão para admin

    def get_object(self, pk):
        # função "básica" para pegar o espaco específico, caso exista. Se não existir, retorna None
        try:
            return Espaco.objects.get(pk=pk)
        except Espaco.DoesNotExist:
            return None

    def get(self, request, pk):
        espaco = self.get_object(pk)
        if not espaco:
            return Response({"erro": "Espaço não encontrado"}, status=404)

        serializer = EspacoSerializer(espaco)
        return Response(serializer.data)

    def put(self, request, pk):
        espaco = self.get_object(pk)
        if not espaco:
            return Response({"erro": "Espaço não encontrado"}, status=404)

        serializer = EspacoSerializer(espaco, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        espaco = self.get_object(pk)
        if not espaco:
            return Response({"erro": "Espaço não encontrado"}, status=404)

        espaco.delete()
        return Response({"msg": "Deletado com sucesso"}, status=204)
