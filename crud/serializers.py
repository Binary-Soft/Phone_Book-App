import re
from rest_framework import serializers
from .models import Users_info


class Users_infoSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    name = serializers.CharField(max_length=30)
    email = serializers.EmailField()
    phone = serializers.IntegerField()
    country = serializers.CharField(max_length=20)
    city = serializers.CharField(max_length=20)
    address = serializers.CharField(max_length=50)
    picture = serializers.ImageField(required=False)

    def create(self, validated_data):
        return Users_info.objects.create(**validated_data)

