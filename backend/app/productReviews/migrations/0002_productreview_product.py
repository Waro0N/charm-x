# Generated by Django 4.2.5 on 2024-06-22 20:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_remove_product_review_remove_product_size_and_more'),
        ('productReviews', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='productreview',
            name='product',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.product'),
        ),
    ]