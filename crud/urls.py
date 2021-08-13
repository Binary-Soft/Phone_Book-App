from django.urls import path
from . import views

app_name = 'crud'

urlpatterns = [ 
    path('', views.infolist, name='list info'),
    path('<str:st>/', views.Specific_User, name='SpecificUserInfo'),
]
