# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import *

class CakeAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {
            'fields': ('name', )
        }),
        ('Ingredient (Fruits)', {
            'classes': ('collapse',),
            'fields': ('fruit_ingredient', )
        }),
        ('Ingredient (Classic)', {
            'classes': ('collapse',),
            'fields': ('classic_ingredient', )
        }),
        ('Ingredients (Nuts)', {
            'classes': ('collapse',),
            'fields': ('nut_ingredients',)
        }),
        ('Topping', {
            'classes': ('collapse',),
            'fields': ('toppings',)
        }),
        ('Dimension', {
            'classes': ('collapse',),
            'fields': ('dimension', )
        }),
        ('Size', {
            'classes': ('collapse',),
            'fields': ('size',)
        }),
        ('Custom Dimension', {
            'classes': ('collapse',),
            'fields': ('custom_dimension',)
        }),
    )

admin.site.register(Cake, CakeAdmin)
admin.site.register(CustomDimension)
admin.site.register(Size)
admin.site.register(Topping)
admin.site.register(FruitIngredient)
admin.site.register(NutIngredients)
admin.site.register(Dimension)
admin.site.register(ClassicIngredient)
admin.site.register(Receipt)

    
