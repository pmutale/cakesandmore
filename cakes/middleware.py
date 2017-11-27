from django.contrib.auth import logout
from django.contrib import messages
import datetime
from django.shortcuts import redirect
from django.conf import settings

class SessionIdleTimeout(object):
    def __init__(self, get_response):
            self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        if request.user.is_authenticated():
            current_datetime = datetime.datetime.now()
            if ('last_login' in request.session):
                last = (current_datetime - request.session['last_login']).seconds
                if last > settings.SESSION_IDLE_TIMEOUT:
                    logout(request)
            else:
                request.session['last_login'] = current_datetime
        return response