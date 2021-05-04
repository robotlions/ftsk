from django.urls import path, include

app_name = 'api_v1'

urlpatterns = [
    path('menuitems/', include('menuitems.urls', namespace='menuitems')),
]