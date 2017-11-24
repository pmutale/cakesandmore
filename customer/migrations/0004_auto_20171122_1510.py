# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-22 14:10
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0003_user_street'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='avatars/')),
                ('street', models.CharField(blank=True, max_length=128, null=True)),
                ('house_number', models.CharField(blank=True, max_length=128, null=True)),
                ('house_number_ext', models.CharField(blank=True, max_length=128, null=True)),
                ('city', models.CharField(blank=True, max_length=128, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='user',
            name='street',
        ),
        migrations.AddField(
            model_name='userprofile',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
