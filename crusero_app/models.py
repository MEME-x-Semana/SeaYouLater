from django.db import models
from django.db.models import Model

class Continente(Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=200)

class Puerto(Model):
    id = models.AutoField(primary_key=True)
    puerto = models.CharField(max_length=200)
    pais = models.CharField(max_length=200)
    continente = models.ForeignKey(Continente, on_delete=models.CASCADE)

class Compania(Model):
    id = models.AutoField(primary_key=True)
    compania = models.CharField(max_length=200)
    servicio = models.CharField(max_length=200)
    precio_base = models.DecimalField(max_digits=10, decimal_places=2)

class CompaniasContinente(Model):
    id_compania = models.ForeignKey(Compania, on_delete=models.CASCADE)
    id_continente = models.ForeignKey(Continente, on_delete=models.CASCADE)
