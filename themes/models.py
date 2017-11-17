# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Dimension(models.Model):
    dimension = models.CharField(max_length=128, null=True, blank=False, help_text='Choose from Circle, Round or Other Custom shapes')
    class Meta:
        verbose_name = 'Dimension'
        verbose_name_plural = 'Dimensions'

    def __str__(self):
        return self.dimension

class Size(models.Model):
    measurement = models.CharField(max_length=128, null=True, blank=True, help_text='The sizes are standart in <b>cm</b>. Thus, just add the number')
    dimension = models.ForeignKey(Dimension, on_delete=models.CASCADE)
    class Meta:
        verbose_name = 'Size'
        verbose_name_plural = 'Sizes'

    def __str__(self):
        return self.measurement

class CustomDimension(models.Model):
    name_of_shape = models.CharField(max_length=128, blank=True, null=True)
    description_of_shape = models.TextField(null=True, blank=True)
    class Meta:
        verbose_name = 'Custom Dimension'
        verbose_name_plural = 'Custom Dimensions'

    def __str__(self):
        return self.name_of_shape

class FruitIngredient(models.Model):
    name_of_fruit = models.CharField(max_length=128, null=True, blank=True)
    class Meta:
        verbose_name = 'Fruit'
        verbose_name_plural = 'Fruits'

    def __str__(self):
        return self.name_of_fruit

class ClassicIngredient(models.Model):
    name_of_ingredient = models.CharField(max_length=128, null=True, blank=True)
    class Meta:
        verbose_name = 'Classic Ingredient'
        verbose_name_plural = 'Classic Ingredients'

    def __str__(self):
        return self.name_of_ingredient

class NutIngredients(models.Model):
    name_of_nut_ingredient = models.CharField(max_length=128, null=True, blank=True)
    def __str__(self):
        return self.name_of_nut_ingredient

    class Meta:
        verbose_name = 'Nuts Ingredient'
        verbose_name_plural = 'Nuts Ingredients'

# class ClassicIngredient(models.Model):
#     name_of_classic_ingredient = models.ForeignKey(ClassicIngredient, on_delete=models.CASCADE)
#     def __str__(self):
#         return self.name_of_classic_ingredient

    # class Meta:
    #     verbose_name = 'Classic Ingredient'
    #     verbose_name_plural = 'Classic Ingredients'
                                      
class Topping(models.Model):
    name = models.CharField(max_length=128, null=True, blank=True)
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Topping'
        verbose_name_plural = 'Toppings'

class Cake(models.Model):
    name = models.CharField(max_length=128, blank=True, null=True)
    classic_ingredient = models.ManyToManyField(ClassicIngredient, blank=True)
    fruit_ingredient = models.ManyToManyField(FruitIngredient, blank=True)
    toppings = models.ManyToManyField(Topping)
    dimension = models.ManyToManyField(Dimension)
    custom_dimension = models.ForeignKey(CustomDimension, blank=True, null=True)
    size = models.ManyToManyField(Size)
    nut_ingredients = models.ManyToManyField(NutIngredients, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Cake'
        verbose_name_plural = 'Cakes'
class Receipt(models.Model):
    booking_id = models.IntegerField(auto_created=True)
    cake = models.ForeignKey(Cake, on_delete=models.CASCADE)

    def __str__(self):
        return self.booking_id

    class Meta:
        verbose_name = 'Receipt'
        verbose_name_plural = 'Receipts'
