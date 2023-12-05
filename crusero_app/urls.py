from django.urls import path
from . import views

urlpatterns = [
    path('continentes/', views.ContinenteList.as_view(), name='continente-list'),
    path('continentes/<int:pk>/', views.ContinenteDetail.as_view(), name='continente-detail'),
    path('puertos/', views.PuertoList.as_view(), name='puerto-list'),
    path('puertos/<int:pk>/', views.PuertoDetail.as_view(), name='puerto-detail'),
    path('companias/', views.CompaniaList.as_view(), name='compania-list'),
    path('companias/<int:pk>/', views.CompaniaDetail.as_view(), name='compania-detail'),
    path('companiascontinente/', views.CompaniasContinenteList.as_view(), name='companiascontinente-list'),
    path('companiascontinente/<int:pk>/', views.CompaniasContinenteDetail.as_view(), name='companiascontinente-detail'),
]
