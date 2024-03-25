from django.urls import path
from .views import Publicidad
urlpatterns = [

    path("agregar", Publicidad.as_view(), name = "agregar"),

    path("actualizar", Publicidad.as_view(), name = "actualizar"),

    path("todos", Publicidad.as_view(), name = "todos"),

    path("eliminar", Publicidad.as_view(), name = "eliminar")
]
