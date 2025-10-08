from django.shortcuts import render
from .models import User
from django.views import View
from django.http import HttpResponse
from django.http import JsonResponse
import json

# Create your views here.
class UserView(View):
    def get(self, request):
        return HttpResponse('Testing the UserView')


def nonUserInquiry(request):
    return HttpResponse('Send a non-user inquiry to the company')


    
    
