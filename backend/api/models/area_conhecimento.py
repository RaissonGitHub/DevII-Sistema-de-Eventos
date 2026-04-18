from django.db import models

from api.enumerations.area_conhecimento_escolha import (
    AreaConhecimentoEscolha as AreaConhecimentoChoices,
)


class AreaConhecimento(models.Model):
    area_conhecimento = models.CharField(
        max_length=50,
        choices=AreaConhecimentoChoices.choices,
        verbose_name="Área de Conhecimento",
    )
    descricao = models.TextField(
        verbose_name="Descrição",
        blank=True,
        null=True,
    )

    def __str__(self):
        return self.get_area_conhecimento_display()

    class Meta:
        verbose_name = "Área de Conhecimento"
        verbose_name_plural = "Áreas de Conhecimento"
