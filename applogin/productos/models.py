from django.db import models

# Create your models here.
# acciones
class Gestion(models.Model):
    # decorador que nos permite no ponerle self a la funcion ya que no accede
    # a ningun atributo  de esta si de clase ect
    @staticmethod
    def agregar_pack(nombre_pack, cantidad):
        nuevo_pack = Pack(
            NOMBRE_PACK = nombre_pack,
            CANTIDAD = cantidad
        )
        nuevo_pack.save()
    @staticmethod
    def actualizar_pack(id_pack, nombre, cantidad):
        paquete = Pack.objects.get(ID_PACK = id_pack)
        paquete.NOMBRE_PACK = nombre
        paquete.CANTIDAD = cantidad 
        paquete.save()
        
    @staticmethod
    def agregar_producto(nombre, tamanio, id_pack, sabor, cantidad_disponible, imagen):
        # Crear una instancia del modelo Product con los datos proporcionados
        nuevo_producto = Product(
            NOMBRE = nombre,
            TAMANIO = tamanio,
            ID_PACK = id_pack,  # ID_PACK_id porque es una clave externa
            SABOR = sabor,
            CANTIDAD_DISPONIBLE = cantidad_disponible,
            IMAGEN = imagen
        )
        # Guardar el nuevo producto en la db
        nuevo_producto.save()
    @staticmethod
    def actualizar_producto(id_producto, nombre, tamanio, id_pack, sabor, cantidad_disponible, img):
    
        producto = Product.objects.get(ID_PRODUCTO = id_producto)
        producto.NOMBRE = nombre
        producto.TAMANIO = tamanio
        producto.ID_PACK = id_pack
        producto.SABOR = sabor
        producto.CANTIDAD_DISPONIBLE = producto.CANTIDAD_DISPONIBLE + cantidad_disponible
        producto.IMAGEN = img
        producto.save()
# modelo
    
class Pack(models.Model):
    ID_PACK = models.AutoField(primary_key= True)
    NOMBRE_PACK = models.CharField(max_length = 30, null = False)
    CANTIDAD = models.PositiveIntegerField()

    acccion = Gestion()


class Product(models.Model):
    # creacion del modelo de db 
    ID_PRODUCTO = models.AutoField(primary_key=True)
    NOMBRE = models.CharField(max_length = 100, null = False)
    TAMANIO = models.CharField(max_length = 20)
    ID_PACK = models.ForeignKey(Pack, on_delete = models.CASCADE)
    SABOR = models.CharField(max_length = 30)
    CANTIDAD_DISPONIBLE = models.PositiveBigIntegerField()
    IMAGEN = models.ImageField(upload_to= "media/image/")
    accion = Gestion()
