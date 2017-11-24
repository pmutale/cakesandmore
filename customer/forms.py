from django import forms
from django.contrib.admin.widgets import AdminDateWidget
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
import datetime


class SignUpForm(UserCreationForm):
    birth_date = forms.DateField(help_text='Required. Format: YYYY-MM-DD',
                                widget = forms.SelectDateWidget(), initial=datetime.date.today)

    class Meta:
        model = get_user_model()
        fields = ('username', 'email', 'birth_date', 'password1', 'password2')