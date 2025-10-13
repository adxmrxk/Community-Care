from rest_framework import serializers
from .models import User
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'firstName', 'lastName', 'username', 'userRole', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }   

    #Gets called when seralizer.save() gets called.
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)