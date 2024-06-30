from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import CreateSupplier, GetSupplier


urlpatterns = [
    path('getSuppliers/' , GetSupplier.as_view()),
    path('createSupplier/' , CreateSupplier.as_view())
]
