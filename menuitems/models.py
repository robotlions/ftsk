from django.db import models
from django.conf import settings

# Create your models here.

class Menuitem(models.Model):

    name = models.CharField(max_length=255, null=True)
    description = models.TextField(null=True)
    vegetarian = models.CharField(max_length=255, null=True)
    vegan = models.CharField(max_length=255, null=True)
    price = models.IntegerField(null=True)
    image = models.ImageField(upload_to='menuitems/', null=True, blank=True)


    def __str__(self):
        return self.name