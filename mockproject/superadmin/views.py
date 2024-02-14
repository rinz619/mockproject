from django.shortcuts import render
from django.views import View
from django.http import HttpResponse,JsonResponse
from superadmin.helper import renderhelper,is_ajax
from django.contrib.auth import login,logout, authenticate
from django.shortcuts import redirect
from superadmin.custom_permision import LoginRequiredMixin
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
        user = authenticate(email=username, password=password)
        if user:
            login(request, user)
            return redirect('superadmin:dashboard')
        else:
            context['username'] = username
            context['password'] = password
            messages.info(request, 'Invalid Username or Password')
            return renderhelper(request, 'login', 'login',context)


class Logout(LoginRequiredMixin,View):
    def get(self, request):
        logout(request)
        return redirect('superadmin:login')


class dashboard(LoginRequiredMixin,View):
    def get(self, request):
        context = {}

        return renderhelper(request, 'home', 'index',context)



# User module start
class userlist(LoginRequiredMixin, View):
    def get(self, request,id=None):
        context = {}
        conditions = Q()

        if is_ajax(request):
            page = request.GET.get('page', 1)
            context['page'] = page
            status = request.GET.get('status')
            type = request.GET.get('type')
            if type == '1':
                id = request.GET.get('id')
                vl = request.GET.get('vl')
                cat = Customers.objects.get(id=id)
                if vl == '2':
                    cat.is_active = False
                else:
                    cat.is_active = True
                cat.save()
                messages.info(request, 'Successfully Updated')
            elif type == '2':
                id = request.GET.get('id')
                Customers.objects.filter(id=id).delete()
                messages.info(request, 'Successfully Deleted')
            if status:
                conditions &= Q(is_active=status)
            data_list = Customers.objects.filter(conditions).order_by('-id')
            paginator = Paginator(data_list, 15)

            try:
                datas = paginator.page(page)
            except PageNotAnInteger:
                datas = paginator.page(1)
            except EmptyPage:
                datas = paginator.page(paginator.num_pages)
            context['datas'] = datas
            template = loader.get_template('superadmin/user/user-table.html')
            html_content = template.render(context, request)
            return JsonResponse({'status': True, 'template': html_content})

        data = Customers.objects.all().order_by('-id')
        p = Paginator(data, 15)
        page_num = request.GET.get('page', 1)
        try:
            page = p.page(page_num)
        except EmptyPage:
            page = p.page(1)
        context['datas'] = page
        context['page'] = page_num
        return renderhelper(request, 'user', 'user-view', context)


class usercreate(LoginRequiredMixin, View):
    def get(self, request,id=None):
        context = {}
        try:
            context['data'] = Customers.objects.get(id=id)
        except:
            context['data'] = None
        return renderhelper(request, 'user', 'user-create', context)
    def post(self,request,id=None):
        try:
            data = Customers.objects.get(id=id)
            messages.info(request, 'Successfully Updated')
        except:
            data = Customers()
            messages.info(request, 'Successfully Added')

        eng_title = request.POST['eng_title']
        arb_title = request.POST['arb_title']
        data.eng_title = eng_title
        data.arb_title = arb_title
        data.save()
        return redirect('superadmin:userlist')

    # User module end


