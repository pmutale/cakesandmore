# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-08 14:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('themes', '0007_auto_20171108_1505'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='fruitingredient',
            options={'verbose_name': 'Fruit', 'verbose_name_plural': 'Fruits'},
        ),
        migrations.AlterField(
            model_name='fruitingredient',
            name='name_of_fruit',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
        migrations.DeleteModel(
            name='Fruit',
        ),
    ]
