from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
import os


def index(request):
    return render(request, 'index.html')

