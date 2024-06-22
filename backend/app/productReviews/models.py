from django.db import models
from profiles.models import CustomUser
from products.models import Product

# Create your models here.
class ProductReview(models.Model):
    reviewer = models.ForeignKey(CustomUser, on_delete=models.CASCADE, default=None, blank=True, null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, default=None, blank=True, null=True)
    review_text = models.TextField()
    created_at = models.DateTimeField(auto_now=True)