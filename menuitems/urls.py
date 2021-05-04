from django.urls import path, include

from .views import MenuitemsListCreateAPIView, MenuitemsRetrieveUpdateDestroyAPIView

app_name = 'menuitems'

urlpatterns = [

    path('menuitems/', MenuitemsListCreateAPIView.as_view()),
    path('menuitems/edit/<int:pk>/', MenuitemsRetrieveUpdateDestroyAPIView.as_view()),

]