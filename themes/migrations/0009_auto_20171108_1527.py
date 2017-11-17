# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-08 14:27
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('themes', '0008_auto_20171108_1511'),
    ]

    operations = [
        migrations.CreateModel(
            name='OtherIngredient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_of_other_ingredient', models.CharField(blank=True, max_length=128, null=True)),
            ],
            options={
                'verbose_name': 'Other Ingredient',
                'verbose_name_plural': 'Other Ingredients',
            },
        ),
        migrations.AddField(
            model_name='cake',
            name='other',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='themes.OtherIngredient'),
            preserve_default=False,
        ),
    ]