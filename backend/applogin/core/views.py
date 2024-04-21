from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
# login 

class LoginView(APIView):

    def _generate_jwt_token(self, user):

        refresh =  RefreshToken.for_user(user)

        return{
            "refresh" : str(refresh),
            "access" : str(refresh.access_token)
        }
    
    def post(self, request):
        
        usuario = request.data.get("Usuario")
        clave = request.data.get("Clave")

        if not usuario or not clave:
            return Response({'error': 'Debe proporcionar un nombre de usuario y una contraseña'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Utenticacion por defecto en el sistema de
        # Gestion de usuarios por defecto de django

        user = authenticate(username=usuario, password=clave)

        if user is None:
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

#  path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
        
        token = self._generate_jwt_token(user)

        return Response(
            token
        )
    