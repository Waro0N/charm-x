from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, ListAPIView, UpdateAPIView, CreateAPIView
from .models import Supplier, ItemCategory, SuppierCatalogue
from rest_framework.response import Response
from rest_framework import status
from .serializers import SupplierSerializer
import uuid

# Create your views here.
class CreateSupplier(CreateAPIView):

    def create(self,request,*args, **kargs):
        try:
            supplier = Supplier(uniq_id =uuid.uuid4() , name=request.data["name"], contact=request.data["contact"])
            supplier.save()
            category_list = request.data.get("categories", [])

            for i in category_list:
                category = ItemCategory(category_name=i, supplier_id=supplier.id)
                category.save()
            return Response({
                "id": supplier.id,
                "uniq_id": supplier.uniq_id,
                "name": supplier.name,
                "contact": supplier.contact
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
class GetSupplier(ListAPIView):
    
    def get(self, request):
        try:
            suppliers = Supplier.objects.all()
            serializer = SupplierSerializer(suppliers, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class CreateCateloge(CreateAPIView):
    def create(self, request):
        try:
            uniq_id =uuid.uuid4()
            price=request.data['price']
        

            catelogue = SuppierCatalogue()

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class GetCatelogue(ListAPIView):
    def get(self, request):
        pass