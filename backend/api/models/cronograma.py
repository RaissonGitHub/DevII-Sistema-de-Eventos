from django.db import models

from ..enumerations.area_conhecimento_escolha import (
    AreaConhecimentoEscolha as AreaConhecimentoChoices,
)


class Cronograma(models.Model):
    evento = models.ForeignKey(
        "Evento",
        on_delete=models.CASCADE,
        related_name="cronogramas",
        help_text="Evento ao qual este cronograma pertence",
    )
    tipo_programacao = models.CharField(
        max_length=50, choices=AreaConhecimentoChoices.choices
    )
    data_inicio = models.DateTimeField()
    data_fim = models.DateTimeField()
    ativo = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.evento.nome} - {self.get_tipo_programacao_display()} - {self.data_inicio} até {self.data_fim}"
