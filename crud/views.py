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
        except Exception :
            info = Users_info.objects.all()
            serializer = Users_infoSerializer(info, many=True)
            json_data = JSONRenderer().render(serializer.data)
            return HttpResponse(json_data, content_type='application\json')

        '''
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

        '''
    

    elif request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        serializer = Users_infoSerializer(data=python_data)
        if serializer.is_valid():
            try :
                serializer.save()
            except Exception as e:
                python_data = {'success_or_error_message': 'This E-mail Already Used'}
                return JsonResponse(python_data, safe=False)
            python_data = {'success_or_error_message': 'Save Success'}
            return JsonResponse(python_data, safe=False)
        else:
            json_data = JSONRenderer().render(serializer.errors)
            return HttpResponse(json_data, content_type='application\json')



@csrf_exempt
def Specific_User(request, st):

    if request.method == 'GET':
        specificuser = Users_info.objects.get(slug=st)
        serializer = Users_infoSerializer(specificuser)
        json_data = JSONRenderer().render(serializer.data)
        return HttpResponse(json_data, content_type='application\json')


    elif request.method == 'DELETE':
        specificuser = Users_info.objects.get(slug=st)
        specificuser.delete()
        python_data = {'success_msg': 'Delete Successfully'}
        return JsonResponse(python_data, safe=False)
    
    
    elif request.method == 'PUT':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        users_info = Users_info.objects.get(slug=st)
        serializer = Users_infoSerializer(users_info, data=python_data)
        if serializer.is_valid():
            serializer.save()
            python_data = {'update message': 'Update Successfully'}
        else:
            python_data = {'update message': 'Update Failed'}
        return JsonResponse(python_data, safe=False)
    

    elif request.method == 'PATCH':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        users_info = Users_info.objects.get(slug=st)
        serializer = Users_infoSerializer(users_info, data=python_data, partial=True)
        if serializer.is_valid():
            serializer.save()
            python_data = {'update message': 'Update Successfully'}
            json_data = JSONRenderer().render(python_data)
            return HttpResponse(json_data, content_type='application\json')