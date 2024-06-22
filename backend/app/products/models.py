from django.db import models
from suppliers.models import Supplier
# Create your models here.
class ProductCategory(models.Model):
    uniq_id = models.CharField(max_length=30, null=True, blank=True)
    name = models.CharField(max_length=30, null=True, blank=True)
    created_at = models.DateTimeField(auto_now=True)

    
class Product(models.Model):
    uniq_id = models.CharField(max_length=30, null=True, blank=True)
    category = models.ForeignKey(ProductCategory,on_delete=models.CASCADE, default=None, blank=True, null=True)
    is_inStock = models.BooleanField(default=True)
    price = models.IntegerField(blank=True, null=True)
    description = models.TextField()
    # size = models.ForeignKey(ProductSize,on_delete=models.CASCADE, default=None, blank=True, null=True)
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, default=None, blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True)




class ProductSize(models.Model):
    SIZE_CHOICES = [
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
        ('XL', 'Extra Large'),
    ]

    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='sizes', default=None, blank=True, null=True)
    size = models.CharField(max_length=2, choices=SIZE_CHOICES,default="S")


class ProductImage(models.Model):
    image = models.ImageField()
    product= models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images', default=None, blank=True, null=True)





