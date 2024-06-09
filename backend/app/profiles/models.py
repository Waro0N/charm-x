from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    address=models.TextField(null=True,blank=True)
    stateField=models.CharField(max_length=20, null=True, blank=True)
    city=models.CharField(max_length=30, null=True, blank=True)
    