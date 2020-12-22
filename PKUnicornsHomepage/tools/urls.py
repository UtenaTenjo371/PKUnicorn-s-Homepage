from django.urls import path

from tools.views import editor, delete_document

urlpatterns = [
    path('tools', editor, name='editor'),
    path('tools/delete_document/<int:docid>/', delete_document, name='delete_document'),
]