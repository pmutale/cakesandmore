# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model

class User(AbstractUser):
    class Meta:
        db_table = 'auth_user'

    def is_customer(self):
        """ A customer is marked as this"""
        return self.is_customer

class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    is_customer = models.BooleanField(default=False)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    street = models.CharField(max_length=128, blank=True, null=True)
    house_number = models.CharField(max_length=128, blank=True, null=True)
    house_number_ext = models.CharField(max_length=128, blank=True, null=True)
    postcode = models.CharField(max_length=128, blank=True, null=True)
    city = models.CharField(max_length=128, blank=True, null=True)
    email_confirmed = models.BooleanField(default=False)

    def __str__(self):
        return '{} {} => from - {}'.format(self.user.first_name, self.user.last_name, self.city)

@receiver(post_save, sender=get_user_model())
def update_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
    instance.userprofile.save()