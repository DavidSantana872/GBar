from django.db import models
from productos.models import Product
# Create your models here.
class Promocion(models.Model):
    ID_PROMOCION = models.AutoField(primary_key = True)
    ID_PRODUCTO = models.ForeignKey(Product, on_delete = models.CASCADE)
    FECHA_PROMOCION = models.DateField()
    FECHA_FIN = models.DateField()
    DESCRIPCION = models.CharField(max_length = 100)