# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-08 10:06
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cakes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'Cake',
                'verbose_name_plural': 'Cakes',
            },
        ),
        migrations.CreateModel(
            name='ClassicIngredient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'Classic Ingredient',
                'verbose_name_plural': 'Classic Ingredients',
            },
        ),
        migrations.CreateModel(
            name='Dimension',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dimension', models.CharField(help_text='Choose from Circle, Round or Other Custom shapes', max_length=128, null=True)),
            ],
            options={
                'verbose_name': 'Dimension',
                'verbose_name_plural': 'Dimensions',
            },
        ),
        migrations.CreateModel(
            name='Fruit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_of_fruit', models.CharField(blank=True, max_length=128, null=True)),
            ],
            options={
                'verbose_name': 'Fruit',
                'verbose_name_plural': 'Fruits',
            },
        ),
        migrations.CreateModel(
            name='FruitIngredient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_of_fruit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='themes.Fruit')),
            ],
            options={
                'verbose_name': 'Fruit Ingredient',
                'verbose_name_plural': 'Fruit Ingredients',
            },
        ),
        migrations.CreateModel(
            name='Receipt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('booking_id', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Shape',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shape', models.CharField(blank=True, max_length=128, null=True)),
            ],
            options={
                'verbose_name': 'Shape',
                'managed': True,
                'verbose_name_plural': 'Shapes',
            },
        ),
        migrations.CreateModel(
            name='Size',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('measurement', models.CharField(blank=True, max_length=128, null=True)),
                ('dimension', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='themes.Dimension')),
            ],
            options={
                'verbose_name': 'Size',
                'verbose_name_plural': 'Sizes',
            },
        ),
        migrations.CreateModel(
            name='Topping',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=128, null=True)),
            ],
            options={
                'verbose_name': 'Topping',
                'verbose_name_plural': 'Toppings',
            },
        ),
        migrations.AddField(
            model_name='classicingredient',
            name='name_of_classic_ingredient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='themes.Fruit'),
        ),
        migrations.AddField(
            model_name='cakes',
            name='classic_ingredient',
            field=models.ManyToManyField(to='themes.ClassicIngredient'),
        ),
        migrations.AddField(
            model_name='cakes',
            name='fruit_ingredient',
            field=models.ManyToManyField(to='themes.FruitIngredient'),
        ),
        migrations.AddField(
            model_name='cakes',
            name='shape',
            field=models.ManyToManyField(to='themes.Shape'),
        ),
        migrations.AddField(
            model_name='cakes',
            name='size',
            field=models.ManyToManyField(to='themes.Size'),
        ),
        migrations.AddField(
            model_name='cakes',
            name='toppings',
            field=models.ManyToManyField(to='themes.Topping'),
        ),
    ]