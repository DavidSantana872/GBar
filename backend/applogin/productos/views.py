from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Pack
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.core.exceptions import ObjectDoesNotExist


# Create your views here.
class Productos(APIView):
    def get(self, request):
        try:
            objeto = Product.objects.all()
            data = []
            for product in objeto:
                product_dict = model_to_dict(product)
                # Si el campo de imagen no está vacío, obtenemos la URL de la imagen
                if product.IMAGEN:
                    product_dict['IMAGEN'] = product.IMAGEN.url
                data.append(product_dict)
        # Convertir a JSON
        except Exception as e:
            return JsonResponse(
                {"Error" : str(e)}, status = 500
            )
        # save parameters es el que acepta cualquier tipo de dato en python 
        return JsonResponse((data), safe=False)

    def post(self, request):
        # se extraen los datos de la request
        #Product.accion.agregar_producto()
        #listo
        try: 
            Product.accion.agregar_producto(
                request.data.get("NOMBRE"),
                request.data.get("TAMANIO"),
                request.data.get("ID_PACK"),
                request.data.get("SABOR"),
                request.data.get("CANTIDAD_DISPONIBLE"),
                request.data.get("IMAGEN")
            )
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
        
        return(
            JsonResponse(
                {"data" : "Agregado"}, status = 200
            )
        )
     
    def put(self, request):
        try:
            Product.accion.actualizar_producto(request.data.get("ID_PRODUCTO"), request.data.get("NOMBRE"), request.data.get("TAMANIO"), request.data.get("ID_PACK"), request.data.get("SABOR"), request.data.get("CANTIDAD_DISPONIBLE"), request.data.get("IMAGEN"))  
        except Exception as e: 
            return(
                JsonResponse(
                    {"Error " : str(e)}, status = 500
                )
            )
        return(
            JsonResponse(
                {"data" : "Actualizado"}, status = 200
            )
        )


class Paquetes(APIView): 
    def get(self, request, ID=None):
        try:
            if ID is not None:
                # Intentar obtener el objeto específico
                objeto = Pack.objects.get(pk=ID)
                datos = model_to_dict(objeto)  # Convertir el objeto encontrado a diccionario
            else:
                # Obtener todos los objetos y convertirlos a lista de diccionarios
                objetos = Pack.objects.all()
                datos = [model_to_dict(objeto) for objeto in objetos]
                
            return JsonResponse(datos, safe=False)  # `safe=False` es necesario para listas de objetos
        except ObjectDoesNotExist:
            return JsonResponse({'error': 'Pack no encontrado'}, status=404)  # Manejo de error si no se encuentra el objeto




    def post(self, request): 
        try:
            Pack.acccion.agregar_pack(
            request.data.get("NOMBRE_PACK"),
            request.data.get("CANTIDAD"),
            )
        except Exception as e:
            # Si ocurre algún error al agregar el producto, devolver una respuesta de error
            return JsonResponse({'error': str(e)}, status=500)
        return(
            JsonResponse(
                {"data" : "Agregado"}, status = 200
            )
        )
    
    def put(self, request):
        try: 
            Pack.acccion.actualizar_pack(request.data.get("ID_PACK"), request.data.get("NOMBRE_PACK"),request.data.get("CANTIDAD"))
        except Exception as e:
            return JsonResponse(
                {
                    "error" : str(e)
                }, status = 500
            )
        return(
            JsonResponse(
                {"data" : "Actualizado"}, status = 200
            )
        )