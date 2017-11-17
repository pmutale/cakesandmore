# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.core import serializers
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .models import *
from .serializers import CakeSerializer
from django.views import View
from rest_framework import generics
# class Ingredients(View):
    # def get(self, request, *args, **kwargs):
        # return HttpResponse('GET request!')

    # def post(self, request, *args, **kwargs):
        # return HttpResponse('POST request!')

# def cake(request, cake_id):
    # cake = Cake.objects.get(pk=cake_id)
    # return render(request, 'templates/cakes.html', {'cake': cake })

# def cakes_view(request):
    # return render(request, 'cakes_view.html', {})
    # nuts = NutIngredients.objects.all()
    # fruit = FruitIngredient.objects.all()
    # classic = ClassicIngredient.objects.all()
    # response = serializers.serialize('json', nuts)
    # return HttpResponse(response, content_type='application/json')


class CakesView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cake.objects.all()
    serializer_class = CakeSerializer