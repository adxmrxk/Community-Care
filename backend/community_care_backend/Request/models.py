from django.db import models
from User.models import User

# Create your models here.

class Request(models.Model):

    title = models.CharField(max_length=128,)
    desc = models.TextField(max_length=512,)
    dueDate = models.DateField()
    createdAt = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='requests')
