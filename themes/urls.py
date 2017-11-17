from django.conf.urls import url
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    # url(r'^', views.cakes_view),
    # url(r'^(?P<cake_id>\d+)/$', views.cake),
    url(r'^api/(?P<pk>[0-9]+)/$', views.CakesView.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)