from django.contrib import admin
from .models import Supplier, ItemCategory, ItemColor,ItemGSM, ItemSizes
# Register your models here.
admin.site.register(Supplier)
admin.site.register(ItemCategory)
admin.site.register(ItemColor)
admin.site.register(ItemGSM)
admin.site.register(ItemSizes)