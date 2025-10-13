from http.client import HTTPResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer
from django.http import HttpResponse
from django.http import JsonResponse #To return JSON.



# Create your views here.
class UserView(APIView):
    def get(self, request):
        return 
    
    def post(self, request):

        return 

    def patch(self, request, user_id):
        return 
    
    
def nonUserInquiry(request):
    return 

def defaultView(request):
    return HttpResponse('Default View')


    
    
