from django.shortcuts import render
from rest_framework.generics import ListAPIView 
from . import models
from . import serializers


class GetAllFood(ListAPIView):
    queryset = models.Food.objects.all()
    serializer_class = serializers.FoodSerializer
    


class GetAllCategories(ListAPIView):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer

