from django.contrib import admin
from .models import Users_info

# Register your models here.

class Users_infoAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'country', 'city')


admin.site.register(Users_info, Users_infoAdmin)