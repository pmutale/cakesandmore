from settings.pipelines.environments.base import *

DEBUG = True

ALLOWED_HOSTS = ['cakesandmore.localhost', '127.0.0.1']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'cakes',
        'USER': 'pm',
        'PASSWORD': 'COR',
        'HOST': 'localhost',
        'PORT': '',
    }
}

INTERNAL_IPS = [
    '127.0.0.1',
]

def show_toolbar(request):
    return True


DEBUG_TOOLBAR_CONFIG = {
    "SHOW_TOOLBAR_CALLBACK": show_toolbar,
    "INTERCEPT_REDIRECTS": False,
}

DEFAULT_FROM_EMAIL = 'testing@example.com'
EMAIL_USE_TLS = True
EMAIL_HOST = 'localhost'
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
EMAIL_PORT = 1025