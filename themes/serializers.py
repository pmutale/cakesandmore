from rest_framework import serializers
from .models import CustomDimension, Cake, ClassicIngredient
from django.contrib.auth.models import User


class CakeSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Cake
        fields = '__all__'
class UserSerializer(serializers.ModelSerializer):
    cake = serializers.PrimaryKeyRelatedField(many=True, queryset=Cake.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'cake_owner')