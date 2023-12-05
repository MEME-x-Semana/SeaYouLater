from rest_framework import serializers
from .models import Continente, Puerto, Compania, CompaniasContinente

class ContinenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Continente
        fields = '__all__'

class PuertoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Puerto
        fields = '__all__'

class CompaniaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compania
        fields = '__all__'

class CompaniasContinenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompaniasContinente
        fields = '__all__'
