# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-23 15:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0007_auto_20171123_1531'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='postcode',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
    ]