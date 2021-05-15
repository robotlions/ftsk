from django.db import models
from django.conf import settings

# Create your models here.
class ContactInfo(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField(max_length=150)
    dayTime = models.DateTimeField()
    numAttendees = models.CharField(max_length=10)
    description = models.CharField(max_length=2000)
    requests = models.CharField(max_length=2000)
    
    

    def __str__(self):
        return self.email