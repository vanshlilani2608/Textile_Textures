from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request, "base.html")
def givingInputData(request):
    
    personName = request.GET['name']
    personEmail = request.GET['email']
    personNumber = int(request.GET['number'])
    return render(request, "seller.html", {'name':personName,'email':personEmail,'number':personNumber})
 