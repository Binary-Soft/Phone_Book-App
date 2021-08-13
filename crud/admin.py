from django.contrib import admin
from .models import Users_info

# Register your models here.

class Users_infoAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'country', 'city')
    prepopulated_fields = {'slug':('email', )}


admin.site.register(Users_info, Users_infoAdmin)