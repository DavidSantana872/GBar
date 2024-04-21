from django.db import models
from productos.models import Product

class Usuario_Pedido(models.Model):
    ID_USUARIO = models.AutoField(primary_key = True)
    NOMBRES = models.CharField(max_length = 50)
    APELLIDOS = models.CharField(max_length = 50)
    NUMERO_TELEFONICO = models.CharField(max_length = 50)
    
class Detalle_Pedido(models.Model):
    ID_DETALLE = models.AutoField(primary_key = True)
    ID_PRODUCTO = models.ForeignKey(Product, on_delete = models.CASCADE)
    CANTIDAD = models.PositiveIntegerField()

class Pedidos_TB(models.Model):
    ID_PEDIDO = models.AutoField(primary_key = True)
    ID_USUARIO = models.ForeignKey(Usuario_Pedido, on_delete = models.CASCADE)
    ID_DETALLE = models.ForeignKey(Detalle_Pedido, on_delete = models.CASCADE)
    ESTADO = models.CharField(max_length = 20)