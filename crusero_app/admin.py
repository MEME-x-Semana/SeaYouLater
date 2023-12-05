from .models import Continente
from .models import CompaniasContinente
from .models import Compania
from .models import Puerto
from django.contrib import admin
from django.contrib.admin import ModelAdmin

# Register your models here.

@admin.register(Continente)
class ContinenteAdmin(ModelAdmin):
    ...

@admin.register(CompaniasContinente)
class CompaniasContinenteAdmin(ModelAdmin):
    ...

@admin.register(Compania)
class CompaniaAdmin(ModelAdmin):
    ...

@admin.register(Puerto)
class PuertoAdmin(ModelAdmin):
    ...