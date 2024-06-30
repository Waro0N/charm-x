from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    
    is_first_order = models.BooleanField(default=False)


class AddressData(models.Model):
    address=models.TextField(null=True,blank=True)
    stateField=models.CharField(max_length=20, null=True, blank=True)
    city=models.CharField(max_length=30, null=True, blank=True)
    created_at=models.DateField(auto_now=True)
    user = models.ForeignKey(CustomUser,  on_delete=models.CASCADE, default=None, blank=True, null=True)
    is_default = models.BooleanField(default= False)

    def __str__(self):
        return str(self.address)