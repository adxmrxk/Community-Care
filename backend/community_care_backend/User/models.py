from django.db import models

# Create your models here.
class User(models.Model):

    userRoles = [
        ("REQUESTER", "Requester"),
        ("VOLUNTEER", "Volunteer")
    ]

    email = models.EmailField(max_length = 128, unique = True)
    firstName = models.CharField(max_length = 64)
    lastName = models.CharField(max_length = 64)
    username = models.CharField(max_length = 128, unique = True)
    userRole = models.CharField(max_length = 32, choices = userRoles, default = "REQUESTER")
