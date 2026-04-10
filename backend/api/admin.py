from django.contrib import admin
from .models import (
    Evento,
    Local,
    Modalidade,
    CampoFormulario,
    CriterioAvaliacao,
    Resposta,
    Espaco
)

admin.site.register(Evento)
admin.site.register(Local)
admin.site.register(Modalidade)
admin.site.register(CampoFormulario)
admin.site.register(CriterioAvaliacao)
admin.site.register(Resposta)
admin.site.register(Espaco)

# Register your models here.
