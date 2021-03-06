# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-08 12:23
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('themes', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='receipt',
            options={'verbose_name': 'Receipt', 'verbose_name_plural': 'Receipts'},
        ),
        migrations.AlterModelOptions(
            name='shape',
            options={'verbose_name': 'Shape', 'verbose_name_plural': 'Shapes'},
        ),
        migrations.AddField(
            model_name='cakes',
            name='name',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
        migrations.AddField(
            model_name='cakes',
            name='receipt',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='themes.Receipt'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='receipt',
            name='booking_id',
            field=models.IntegerField(auto_created=True),
        ),
    ]
