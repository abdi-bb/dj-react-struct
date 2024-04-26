from .base import *

# Email
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

# Media and Static files(you don't this for production, as you may use other services like AWS S3, Google Cloud Storage, etc.)
MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "../", "mediafiles")

STATIC_URL = "static/"
STATIC_ROOT = os.path.join(BASE_DIR, "../", "staticfiles")

# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}