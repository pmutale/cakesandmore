# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-08 13:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('themes', '0002_auto_20171108_1323'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomDimension',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_of_shape', models.TextField(blank=True, null=True)),
                ('description_of_shape', models.TextField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'CustomDimension',
                'verbose_name_plural': 'CustomDimensions',
            },
        ),
        migrations.RemoveField(
            model_name='cakes',
            name='shape',
        ),
        migrations.AddField(
            model_name='cakes',
            name='dimension',
            field=models.ManyToManyField(to='themes.Dimension'),
        ),
        migrations.DeleteModel(
            name='Shape',
        ),
    ]
