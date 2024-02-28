from django.shortcuts import render

#from pathlib import Path
#import os


# Create your views here.
def home(request):
    return render(request,'index.html')
def sgn(request):
    return render(request,'sign.html')
def menu(request):
    return render(request,'menu.html')
def deals(request):
    return render(request,'deals.html')