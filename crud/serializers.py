import re
from rest_framework import serializers
from .models import Users_info


class Users_infoSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    name = serializers.CharField(max_length=30)
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=20)
    country = serializers.CharField(max_length=20)
    city = serializers.CharField(max_length=20)
    address = serializers.CharField(max_length=50)
    picture = serializers.ImageField(required=False)
    slug = serializers.SlugField(required=False)

    def create(self, validated_data):
        return Users_info.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name =     validated_data.get('name', instance.name)
        instance.email =    validated_data.get('email', instance.email)
        instance.phone =    validated_data.get('phone', instance.phone)
        instance.country =  validated_data.get('country', instance.country)
        instance.city =     validated_data.get('city', instance.city)
        instance.address =  validated_data.get('address', instance.address)
        instance.picture =  validated_data.get('picture', instance.picture)
        instance.slug =  validated_data.get('slug', instance.slug)
        instance.save()
        return instance
