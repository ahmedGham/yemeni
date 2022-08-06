from django.urls import path
from . import views
urlpatterns = [
    path('food/', views.GetAllFood.as_view(), name='all-food'),
    path('categories/', views.GetAllCategories.as_view(), name='all-categories'),
]
