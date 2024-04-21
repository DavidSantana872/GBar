from django.contrib import admin
from .models import Pedidos_TB, Usuario_Pedido, Detalle_Pedido
# Register your models here.

admin.site.register(Pedidos_TB)

admin.site.register(Usuario_Pedido)

admin.site.register(Detalle_Pedido)