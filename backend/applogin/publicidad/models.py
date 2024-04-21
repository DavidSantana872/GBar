from django.db import models
from productos.models import Product
# Create your models here.

class Gestion(models.Model):
    @staticmethod
    def agregar(id_producto, fecha_promocion, fecha_fin, descripcion):
        nueva_promocion = Promocion( 
            ID_PRODUCTO = id_producto, 
            FECHA_PROMOCION = fecha_promocion, 
            FECHA_FIN = fecha_fin, 
            DESCRIPCION = descripcion, 
        )
        nueva_promocion.save()

    def actualizar(id_promocion, id_producto, fecha_promocion, fecha_fin, descripcion):
        nueva_promocion = Promocion.objects.get( 
            ID_PROMOCION = id_promocion
        )
        nueva_promocion.ID_PRODUCTO = id_producto, 
        nueva_promocion.FECHA_PROMOCION = fecha_promocion, 
        nueva_promocion.FECHA_FIN = fecha_fin, 
        nueva_promocion.DESCRIPCION = descripcion, 
        nueva_promocion.save()

class Promocion(models.Model):
    ID_PROMOCION = models.AutoField(primary_key = True)
    ID_PRODUCTO = models.ForeignKey(Product, on_delete = models.CASCADE)
    FECHA_PROMOCION = models.DateField()
    FECHA_FIN = models.DateField()
    DESCRIPCION = models.CharField(max_length = 100)