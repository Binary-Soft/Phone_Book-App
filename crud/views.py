from django.shortcuts import render, HttpResponse
from .models import Users_info
from .serializers import Users_infoSerializer
from rest_framework.renderers import JSONRenderer
import io
from rest_framework.parsers import JSONParser

# Create your views here.
def infolist(request):
    info = Users_info.objects.all()
    serializer = Users_infoSerializer(info, many=True)
    json_data = JSONRenderer().render(serializer.data)
    return HttpResponse(json_data, content_type='application\json')
