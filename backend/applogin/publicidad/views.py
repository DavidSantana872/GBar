from rest_framework.views import APIView
from .models import Promocion, Gestion
from django.http import JsonResponse
from django.forms.models import model_to_dict
from datetime import *
# Create your views here.
class Publicidad(APIView):
    def get(self, request):
        try: 
            objeto  = Promocion.objects.all()
            list_data = []
            for dato in objeto:
                
                temporal = model_to_dict(dato)
                
                string_fecha = str(temporal["FECHA_FIN"]).split("-")

                fecha_producto_seleccionado = date(int(string_fecha[0]), int(string_fecha[1]), int(string_fecha[2]))

                fecha_actual = date.today()

                if(fecha_producto_seleccionado > fecha_actual):
                    
                    list_data.append(temporal)

        except Exception as e:
            return(
                JsonResponse(
                    {
                        "error" : str(e)
                    }, status = 500
                )
            )
        return(
            JsonResponse(
                list_data, 
                safe = False
            )
        )
    def post(self, request):
        try:
            Gestion.agregar(
                request.data.get("ID_PRODUCTO"),
                request.data.get("FECHA_PROMOCION"),
                request.data.get("FECHA_FIN"),
                request.data.get("DESCRIPCION")
            )
        except Exception as e:
            return(
                JsonResponse(
                    {"error": str(e)},
                    status = 500
                )
            )
        return(
            JsonResponse(
                {"data": "Agregado"},
                status = 200
            )
        )

    def put(self, request):
        try:
            Gestion.actualizar(
                request.data.get("ID_PROMOCION"),
                request.data.get("ID_PRODUCTO"),
                request.data.get("FECHA_PROMOCION"),
                request.data.get("FECHA_FIN"),
                request.data.get("DESCRIPCION")
            )
        except Exception as e:
            return(
                JsonResponse(
                    {"error": str(e)},
                    status = 500
                )
            )
        return(
            JsonResponse(
                {"data": "Agregado"},
                status = 200
            )
        )
    def delete(self, request):
        pass