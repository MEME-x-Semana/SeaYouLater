from django.shortcuts import render

# Create your views here.

from rest_framework import generics
from .models import Continente, Puerto, Compania, CompaniasContinente
from .serializers import ContinenteSerializer, PuertoSerializer, CompaniaSerializer, CompaniasContinenteSerializer

class ContinenteList(generics.ListCreateAPIView):
    queryset = Continente.objects.all()
    serializer_class = ContinenteSerializer

class ContinenteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Continente.objects.all()
    serializer_class = ContinenteSerializer

class PuertoList(generics.ListCreateAPIView):
    queryset = Puerto.objects.all()
    serializer_class = PuertoSerializer

class PuertoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Puerto.objects.all()
    serializer_class = PuertoSerializer

class CompaniaList(generics.ListCreateAPIView):
    queryset = Compania.objects.all()
    serializer_class = CompaniaSerializer

class CompaniaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Compania.objects.all()
    serializer_class = CompaniaSerializer

class CompaniasContinenteList(generics.ListCreateAPIView):
    queryset = CompaniasContinente.objects.all()
    serializer_class = CompaniasContinenteSerializer

class CompaniasContinenteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CompaniasContinente.objects.all()
    serializer_class = CompaniasContinenteSerializer
