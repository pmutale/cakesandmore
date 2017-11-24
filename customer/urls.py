from django.conf.urls import url
from django.contrib.auth import views as customer_views
from . import views

app_name = 'customer'

urlpatterns = [
    url(r'^signup/$', views.customer_signup, name='customer-signup'),
    url(r'^profile/$', views.customer_profile, name='customer-profile'),

    url(r'^logout/$', customer_views.logout, {'next_page': 'customer:customer-login'}, name='customer-logout'),
    url(r'^login/$', customer_views.login, {'template_name': 'customer/login.html'}, name='customer-login'),

    url(r'^password/done/$', customer_views.password_reset_done, {'template_name': 'customer/password_success.html'},
        name='customer-password_success'),

    url(r'^account_activation_sent/$', views.account_activation_sent, name='account_activation_sent'),
    url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        views.activate, name='activate'),

    # Loggedin Users
    url(r'^settings/password/$', customer_views.PasswordChangeView.as_view(
        template_name='customer/settings/password_change.html'),
        name='customer_settings_password_change'),
    url(r'^settings/password/done/$',
        customer_views.PasswordChangeDoneView.as_view(
            template_name='customer/settings/password_change_done.html'),
        name='customer_password_change_done'),

    # Unloggedin Users
    url(r'^password/reset/$', customer_views.PasswordResetView.as_view(
        template_name='customer/password/reset.html',
        email_template_name='customer/password/reset_email.html',
        subject_template_name='customer/password/reset_subject.txt'),
        name='customer_password_reset'),

    url(r'^password/reset/done/$', customer_views.PasswordResetDoneView.as_view(
        template_name='customer/password/reset_done.html'),
        name='customer_password_reset_done'),


    url(r'^password/reset/comfirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        customer_views.PasswordResetConfirmView.as_view(
            template_name='customer/password/reset_confirm.html'),
        name='customer_password_reset_confirm'),

    url(r'^reset/complete/$',
        customer_views.PasswordResetCompleteView.as_view(
            template_name='customer/password/reset_complete.html'),
        name='customer_password_reset_complete'),

]