from .base import Base
from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinLengthValidator, MinValueValidator


class Espaco(Base):
    nome = models.CharField(max_length=250,
                            validators=[MinLengthValidator(3)],
                            verbose_name=_("Nome"))
    capacidade = models.IntegerField(
                            validators=[MinValueValidator(1)],
                            verbose_name=_("Capacidade"))
    predio_bloco = models.CharField(max_length=250,
                                    validators=[MinLengthValidator(3)],
                                    verbose_name=_("Prédio/Bloco"),
                                    help_text=_("Digite o bloco/prédio que este espaço está localizado. "))
    recursos_disponiveis = models.TextField(verbose_name=_("Recursos disponíveis"),
                                            help_text= _("Recursos disponíveis no espaço. Ex.: projetor, computador."))
    ativo = models.BooleanField(verbose_name=_("Ativo"))


    """def clean(self):
        errors = {}

        #nome não pode ser só número
        if self.nome.isdigit():
            errors['nome'] = _('O nome não pode conter apenas números.')

        #evitar duplicidade
        if Local.objects.filter(
            nome__iexact=self.nome,
            endereco__iexact=self.endereco
            ).exclude(pk=self.pk).exists():
                errors['__all__'] = _('Já existe um local com esse nome e endereço.')

        if errors:
            raise ValidationError(errors)
        """
    
    def __str__(self):
        return f'{self.nome}'


