from django.conf.urls import url
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^cake_list/$', views.CakeListView.as_view()),
    url(r'^user_list/$', views.UserListView.as_view()),
    url(r'^user_detail/(?P<pk>[0-9]+)$', views.UserListView.as_view()),
    url(r'^cake_detail/(?P<pk>[0-9]+)/$', views.CakeDetailView.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)