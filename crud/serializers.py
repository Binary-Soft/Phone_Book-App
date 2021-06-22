from rest_framework import serializers



class Users_infoSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=30)
    email = serializers.EmailField()
    phone = serializers.IntegerField()
    country = serializers.CharField(max_length=20)
    city = serializers.CharField(max_length=20)
    address = serializers.CharField(max_length=50)
    picture = serializers.ImageField()
