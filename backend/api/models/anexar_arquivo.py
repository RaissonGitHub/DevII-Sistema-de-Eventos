from django.db import models


class Arquivo(models.Model):
    nome_arquivo = models.CharField(max_length=255)
    arquivo = models.FileField(upload_to="arquivos/")

    def __str__(self):
        return self.nome_arquivo
