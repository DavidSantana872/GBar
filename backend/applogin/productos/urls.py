from django.urls import path 
from .views import Productos, Paquetes

urlpatterns = [
     path("agregar", Productos.as_view(), name = "agregar"),
     path("actualizar", Productos.as_view(), name='actualizar'),
     path("todos", Productos.as_view(), name="todos"),
     path("pack", Paquetes.as_view(), name="paquetes")
]
