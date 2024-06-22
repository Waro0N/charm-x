from django.db import models

# Create your models here.
class Supplier(models.Model):
    uniq_id = models.CharField(max_length=30, null=True, blank=True)
    name = models.CharField(max_length=50, null=True, blank=True)
    contact = models.CharField(max_length=60, null=True, blank=True)
    created_at = models.DateField(auto_now=True)


    def __str__(self):
        return self.name