from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Menuitem
from .serializers import MenuitemSerializer

# Create your views here.
class MenuitemsListCreateAPIView(generics.ListCreateAPIView):
    queryset = Menuitem.objects.all()
    serializer_class = MenuitemSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class MenuitemsRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Menuitem.objects.all()
    serializer_class = MenuitemSerializer