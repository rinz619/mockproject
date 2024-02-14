from django.shortcuts import render
from django.views import View
from django.http import HttpResponse,JsonResponse
from superadmin.helper import renderhelper,is_ajax
from django.contrib.auth import login,logout, authenticate
from django.shortcuts import redirect
from superadmin.custom_permision import LoginRequiredMixin,AdminLoginRequiredMixin
from django.contrib.auth.hashers import check_password
from django.contrib import messages
from superadmin.models import *
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.template import loader
from django.db.models import Q


# Create your views here.
class index(View):
    def get(self, request):
        context = {}
        return renderhelper(request, 'login', 'login',context)
    def post(self, request):
        context = {}
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return redirect('superadmin:dashboard')
        else:
            context['username'] = username
            context['password'] = password
            messages.info(request, 'Invalid Username or Password')
            return renderhelper(request, 'login', 'login',context)
