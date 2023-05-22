from django.urls import path

from .import apps

urlpatterns= [
    #/api/{app.urls}
    path('/list', apps.list, name='list'),
]