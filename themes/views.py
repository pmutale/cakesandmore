# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from .models import *
from django.contrib.auth.models import User
from .serializers import CakeSerializer, UserSerializer
from rest_framework import mixins, generics, permissions, serializers
class CakeListView(generics.ListCreateAPIView):
    queryset = Cake.objects.all()
    serializer_class = CakeSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
           

class CakeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cake.objects.all()
    serializer_class = CakeSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly)

    
class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    

class UserDetailView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    