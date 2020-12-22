from django.contrib import admin

# Register your models here.
from .models import Link, BookMark

admin.site.register(Link)
admin.site.register(BookMark)


