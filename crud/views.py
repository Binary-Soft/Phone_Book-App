from django.http.response import JsonResponse
from django.shortcuts import render, HttpResponse
from .models import Users_info
from .serializers import Users_infoSerializer
from rest_framework.renderers import JSONRenderer
import io
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def infolist(request):
    if request.method == 'GET':
        json_data = request.body
        stream = io.BytesIO(json_data)
        try :
            python_data = JSONParser().parse(stream)
        except Exception as e:
            info = Users_info.objects.all()
            serializer = Users_infoSerializer(info, many=True)
            json_data = JSONRenderer().render(serializer.data)
            return HttpResponse(json_data, content_type='application\json')

        ID = python_data.get('id', None)
        if ID is not None:
            try:
                info = Users_info.objects.get(id=ID)
            except Users_info.DoesNotExist:
                python_data = {'Error_msg': 'User Not Found'}
                json_data = JSONRenderer().render(python_data)
                return HttpResponse(json_data, content_type='application\json')
            serializer = Users_infoSerializer(info)
            json_data = JSONRenderer().render(serializer.data)
            return HttpResponse(json_data, content_type='application\json')
    
    elif request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        serializer = Users_infoSerializer(data=python_data)
        if serializer.is_valid():
            serializer.save()
            python_data = {'success_msg': 'Save success'}
            return JsonResponse(python_data, safe=False)
        else:
            print('\n\n', serializer.errors, '\n\n')
            json_data = JSONRenderer().render(serializer.errors)
            return HttpResponse(json_data, content_type='application\json')


