from django.db import models

# Create your models here.
class Supplier(models.Model):
    uniq_id = models.CharField(max_length=30, null=True, blank=True)
    name = models.CharField(max_length=50, null=True, blank=True)
    contact = models.CharField(max_length=60, null=True, blank=True)
    created_at = models.DateField(auto_now=True)


    def __str__(self):
        return self.name
    
class ItemCategory(models.Model):
    category_name = models.CharField(max_length=50, null=True, blank=True)
    created_at = models.DateTimeField(auto_now=True)

    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)




class SuppierCatalogue(models.Model):
    uniq_id = models.CharField(max_length=30, null=True, blank=True)
    price = models.IntegerField()
    # relation
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    category = models.ForeignKey(ItemCategory, on_delete=models.CASCADE)
    
    
class ItemSizes(models.Model):

    SIZE_CHOICES = [
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
        ('XL', 'Extra Large'),
        ('XXL', 'Extra-Extra Large'),
    ]

    catalogue_id = models.ForeignKey(SuppierCatalogue ,on_delete=models.CASCADE)
    sizes = models.CharField(max_length=50, choices=SIZE_CHOICES,default="S")


class ItemColor(models.Model):
    COLOR_CHOICES = [
        ('NAN', 'none'),
        ('red', 'red')
    ]

    catalogue_id = models.ForeignKey(SuppierCatalogue ,on_delete=models.CASCADE)
    color = models.CharField(max_length=10, choices=COLOR_CHOICES,default="none")


class ItemGSM(models.Model):
    GSM_CHOICES = [
        (0,0),
        (1, 180),
        (2, 210),
        (3,240),
        (4,320),
    ]

    catalogue_id = models.ForeignKey(SuppierCatalogue ,on_delete=models.CASCADE)
    gsm = models.IntegerField(choices=GSM_CHOICES, default=0)