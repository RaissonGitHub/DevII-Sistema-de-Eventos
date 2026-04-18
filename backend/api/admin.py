from django import forms
from django.contrib import admin

<<<<<<< HEAD
from .models import (
    CampoFormulario,
    CriterioAvaliacao,
    Espaco,
    Evento,
    Local,
    Modalidade,
    Resposta,
    Sessao,
)

admin.site.register(Evento)
admin.site.register(Local)
admin.site.register(Modalidade)
admin.site.register(CampoFormulario)
admin.site.register(CriterioAvaliacao)
admin.site.register(Resposta)
admin.site.register(Espaco)
admin.site.register(Sessao)
=======
from .enumerations.area_conhecimento_escolha import AreaConhecimentoEscolha
from .models import AreaConhecimento, Arquivo, Cronograma, Evento, Local
>>>>>>> 6ba585b (Mudando de brain..comite necessário)


class ArquivoAdmin(admin.ModelAdmin):
    list_display = ("id", "nome_arquivo", "arquivo")
    search_fields = ("nome_arquivo",)
    readonly_fields = ("arquivo",)


class CronogramaForm(forms.ModelForm):
    """Formulário customizado para exibir as enumerations de forma clara"""

    tipo_programacao = forms.ChoiceField(
        choices=AreaConhecimentoEscolha.choices,
        widget=forms.RadioSelect(),
        help_text="Selecione uma das áreas de conhecimento disponíveis",
    )

    class Meta:
        model = Cronograma
        fields = ("evento", "tipo_programacao", "data_inicio", "data_fim", "ativo")


class CronogramaAdmin(admin.ModelAdmin):
    form = CronogramaForm
    list_display = (
        "id",
        "evento",
        "get_tipo_programacao_display",
        "data_inicio",
        "data_fim",
        "ativo",
    )
    list_filter = ("ativo", "tipo_programacao")
    search_fields = ("evento__nome", "tipo_programacao")
    fieldsets = (
        ("Informações Básicas", {"fields": ("evento", "ativo")}),
        (
            "Tipo de Programação",
            {
                "fields": ("tipo_programacao",),
                "description": "Selecione uma das seguintes áreas de conhecimento:",
            },
        ),
        ("Datas e Horários", {"fields": ("data_inicio", "data_fim")}),
    )
    readonly_fields = ()

    def get_tipo_programacao_display(self, obj):
        """Exibe o nome legível da enum AreaConhecimentoEscolha"""
        if obj.tipo_programacao:
            for value, label in AreaConhecimentoEscolha.choices:
                if value == obj.tipo_programacao:
                    return label
        return obj.tipo_programacao

    get_tipo_programacao_display.short_description = "Tipo de Programação"


class EventoAdmin(admin.ModelAdmin):
    list_display = ("id", "nome", "status_evento", "setor", "carga_horaria")
    list_filter = ("status_evento", "setor")
    search_fields = ("nome", "tema")


class AreaConhecimentoForm(forms.ModelForm):
    """Formulário customizado para exibir as enumerations de forma clara"""

    area_conhecimento = forms.ChoiceField(
        choices=AreaConhecimentoEscolha.choices,
        widget=forms.RadioSelect(),
        help_text="Selecione uma das áreas de conhecimento disponíveis",
        label="Área de Conhecimento",
    )

    class Meta:
        model = AreaConhecimento
        fields = ("area_conhecimento", "descricao")


class AreaConhecimentoAdmin(admin.ModelAdmin):
    form = AreaConhecimentoForm
    list_display = ("id", "get_area_conhecimento_display", "descricao")
    search_fields = ("area_conhecimento",)
    fieldsets = (
        (
            "Área de Conhecimento",
            {
                "fields": ("area_conhecimento",),
                "description": "Selecione uma das seguintes áreas de conhecimento:",
            },
        ),
        (
            "Descrição",
            {
                "fields": ("descricao",),
                "classes": ("collapse",),
            },
        ),
    )

    def get_area_conhecimento_display(self, obj):
        """Exibe o nome legível da enum AreaConhecimentoEscolha"""
        if obj.area_conhecimento:
            for value, label in AreaConhecimentoEscolha.choices:
                if value == obj.area_conhecimento:
                    return label
        return obj.area_conhecimento

    get_area_conhecimento_display.short_description = "Área de Conhecimento"


class LocalAdmin(admin.ModelAdmin):
    list_display = ("id", "nome")


admin.site.register(Arquivo, ArquivoAdmin)
admin.site.register(AreaConhecimento, AreaConhecimentoAdmin)
admin.site.register(Cronograma, CronogramaAdmin)
admin.site.register(Evento, EventoAdmin)
admin.site.register(Local, LocalAdmin)
