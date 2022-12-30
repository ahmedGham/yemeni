from dataclasses import fields
from pyexpat import model
from rest_framework import  serializers
from . import models

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'

class FoodSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True)
    class Meta:
        model = models.Food
        fields = '__all__'

