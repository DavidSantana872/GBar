from django.urls import path
from rest_framework_simplejwt import views as jwt_views

###################
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .views import LoginView

class Protegida(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        return Response({"content": "Esta vista está protegida"})
###################


urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    #path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    #path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    #path('protegida/', Protegida.as_view(), name='protegida')
]