from django.db import models

class Skill(models.Model):
    skill = models.CharField(max_length=30)
    description = models.CharField(max_length=500)
# Create your models here.
