# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-08 13:47
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('themes', '0005_auto_20171108_1432'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cake',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=128, null=True)),
                ('classic_ingredient', models.ManyToManyField(to='themes.ClassicIngredient')),
            ],
            options={
                'verbose_name': 'Cake',
                'verbose_name_plural': 'Cakes',
            },
        ),
        migrations.RemoveField(
            model_name='cakes',
            name='classic_ingredient',
        ),
        migrations.RemoveField(
            model_name='cakes',
            name='custom_dimension',
        ),
        migrations.RemoveField(
            model_name='cakes',
            name='dimension',
        ),
        migrations.RemoveField(
            model_name='cakes',
            name='fruit_ingredient',
        ),
        migrations.RemoveField(
            model_name='cakes',
            name='receipt',
        ),
        migrations.RemoveField(
            model_name='cakes',
            name='size',
        ),
        migrations.RemoveField(
            model_name='cakes',
            name='toppings',
        ),
        migrations.AlterModelOptions(
            name='customdimension',
            options={'verbose_name': 'Custom Dimension', 'verbose_name_plural': 'Custom Dimensions'},
        ),
        migrations.AlterField(
            model_name='size',
            name='measurement',
            field=models.CharField(blank=True, help_text='The sizes are standart in <b>cm</b>. Thus, just add the number', max_length=128, null=True),
        ),
        migrations.DeleteModel(
            name='Cakes',
        ),
        migrations.AddField(
            model_name='cake',
            name='custom_dimension',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='themes.CustomDimension'),
        ),
        migrations.AddField(
            model_name='cake',
            name='dimension',
            field=models.ManyToManyField(to='themes.Dimension'),
        ),
        migrations.AddField(
            model_name='cake',
            name='fruit_ingredient',
            field=models.ManyToManyField(to='themes.FruitIngredient'),
        ),
        migrations.AddField(
            model_name='cake',
            name='size',
            field=models.ManyToManyField(to='themes.Size'),
        ),
        migrations.AddField(
            model_name='cake',
            name='toppings',
            field=models.ManyToManyField(to='themes.Topping'),
        ),
        migrations.AddField(
            model_name='receipt',
            name='cake',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='themes.Cake'),
            preserve_default=False,
        ),
    ]