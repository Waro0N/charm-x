from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, AddressData
from .form import CustomUserCreationForm
# Register your models here.
class CustomUserAdmin(UserAdmin):
    model=CustomUser
    add_form=CustomUserCreationForm

    fieldsets = (
        *UserAdmin.fieldsets,
        # (
        #     "user Data", {
        #         "fields": ("address",)
        #     }
        # ),
        (
            "order_data", {
                "fields": ("is_first_order",)
            }
        )
    )

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(AddressData)