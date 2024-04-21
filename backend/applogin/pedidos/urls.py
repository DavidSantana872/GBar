from django.urls import path
from .views import Pedidos
urlpatterns = [
    path("agregar", Pedidos.as_view()),
    path("actualizar", Pedidos.as_view()),
    path("eliminar", Pedidos.as_view()),
    path("todos", Pedidos.as_view()),
]
