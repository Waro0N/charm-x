from django.contrib import admin
from .models import Product , ProductCategory , ProductSize, ProductImage
# Register your models here.
admin.site.register(Product)
admin.site.register(ProductCategory)
admin.site.register(ProductSize)
admin.site.register(ProductImage)
