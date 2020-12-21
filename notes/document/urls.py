from django.urls import path

from document.views import editor, delete_document

urlpatterns = [
    path('', editor, name='editor'),
    path('delete_document/<int:docid>/', delete_document, name='delete_document'),
]