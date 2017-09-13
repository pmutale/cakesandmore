from settings.pipelines.environments.base import *

DEBUG = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

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