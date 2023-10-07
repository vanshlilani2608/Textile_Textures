from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.home,name='home'),
    path('decision', views.givingInputData, name='decision'),

]