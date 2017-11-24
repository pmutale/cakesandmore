from django.conf.urls import url
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^make_own_recept/$', views.create_cake_receipt, name='own_recept'),
    url(r'^cake_list/$', views.CakeListView.as_view(), name='cake_list'),
    url(r'^user_list/$', views.UserListView.as_view(), name='user_list'),
    url(r'^user_detail/(?P<pk>[0-9]+)$', views.UserListView.as_view(), name='user_detail'),
    url(r'^cake_detail/(?P<pk>[0-9]+)/$', views.CakeDetailView.as_view(), name='cake_detail')
]

urlpatterns = format_suffix_patterns(urlpatterns)