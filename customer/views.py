# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth import authenticate, views, login, logout
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from .forms import SignUpForm
from django.shortcuts import render, redirect, render_to_response
from .tokens import account_activation_token
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_text
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.core.mail import EmailMessage


@login_required
def customer_profile(request):
    """
    Customer Profile
    :param request:
    :return:
    """
    return render(request, 'customer/customer_profile.html')


def customer_signup(request):
    """
    User sign Up view
    :param request:
    :return:
    """
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            # User
            customer = form.save(commit=False)
            customer.is_active = False
            customer.save()

            # Profile
            customer.refresh_from_db()
            customer.userprofile.birth_date = form.cleaned_data.get('birth_date')
            customer.userprofile.is_customer = True
            customer.userprofile.save()

            # Activation Email
            current_site = get_current_site(request)
            subject = 'Activate Your CakesandMore Account'
            message = render_to_string('customer/activation/email.html', {
                'user': customer,
                'domail': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(customer.pk)),
                'token': account_activation_token.make_token(customer)
            })
            to_email = form.cleaned_data.get('email')
            email = EmailMessage(subject, message, to=[to_email])
            email.send()
            return redirect('customer:customer_activation_sent')
    else:
        form = SignUpForm()
    return render(request, 'customer/signup.html', {'form': form})


def customer_logout(request):
    """
    :param request:
    """
    logout(request)


def account_activation_sent(request):
    """

    :param request:
    :return:
    """
    return render(request, 'customer/activation/sent.html')


def activate(request, uidb64, token):
    """
    Activate Users
    :param request:
    :param uidb64:
    :param token:
    :return:
    """
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = get_user_model()
        customer = user.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, user.DoesNotExist):
        user = None

    if customer is not None and account_activation_token.check_token(customer, token):
        customer.is_active = True
        customer.save()
        customer.userprofile.email_confirmed = True
        customer.userprofile.save()
        login(request, customer)
        return redirect('customer:customer-profile')
    else:
        return render(request, 'customer/activation/invalid.html')
