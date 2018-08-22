from settings.pipelines.environments.base import *

DEBUG = False

ALLOWED_HOSTS = ['cakesandmore-dev.herokuapp.com'] 

DATABASES = {
    'default': {
        'CONN_MAX_AGE': 0,
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'HOST': 'ec2-79-125-2-71.eu-west-1.compute.amazonaws.com',
        'NAME': 'dfe5phk7q3gn23',
        'PASSWORD': '6b61e8ca56fcae5efe9a36dd06969fa7aa7aab8205f8104fb1faf76245676655',
        'PORT': 5432,
        'USER': 'zqspeetvbbryuv'
    }
}

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-prod-stats.json'),
    }
}