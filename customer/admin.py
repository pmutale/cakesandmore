# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib import admin
from customer.models import User, UserProfile


admin.site.register(User, BaseUserAdmin)
admin.site.register(UserProfile)