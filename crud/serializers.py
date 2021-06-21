from rest_framework import serializers
from .models import Users_info



class Users_infoSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=30)
    email = serializers.EmailField()
    phone = serializers.IntegerField()
    country = serializers.CharField(max_length=20)
    city = serializers.CharField(max_length=20)
    address = serializers.CharField(max_length=50)
