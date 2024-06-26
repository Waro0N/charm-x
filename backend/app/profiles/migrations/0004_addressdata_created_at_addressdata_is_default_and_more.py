# Generated by Django 4.2.5 on 2024-06-22 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0003_rename_address_id_customuser_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='addressdata',
            name='created_at',
            field=models.DateField(auto_now=True),
        ),
        migrations.AddField(
            model_name='addressdata',
            name='is_default',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='customuser',
            name='is_first_order',
            field=models.BooleanField(default=False),
        ),
    ]
