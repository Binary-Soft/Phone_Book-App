from django.db import models

# Create your models here.
class Users_info(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    country = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    address = models.CharField(max_length=50)
    picture = models.ImageField(upload_to='profile', default='profile/default_user.png')

    slug = models.SlugField(blank=True)

    def get_custom_email(self):
        i = 0
        length = self.email.rfind('@')
        li = ''
        while self.email[i] != '@' and i < length:
            li += self.email[i]
            i += 1
        return li
        

    def save(self, *args, **kwargs):
        self.slug = self.get_custom_email()
        super().save()


    def __str__(self):
        return self.email
