# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-08 13:28
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('themes', '0003_auto_20171108_1409'),
    ]

    operations = [
        migrations.AddField(
            model_name='cakes',
            name='custom_dimension',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='themes.CustomDimension'),
            preserve_default=False,
        ),
    ]
