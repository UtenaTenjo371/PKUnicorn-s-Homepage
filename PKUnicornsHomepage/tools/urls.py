from django.urls import path

from tools.views import editor, delete_document

urlpatterns = [
    path('tools', editor, name='editor'),
    #Note
    path('tools/delete_document/<int:docid>/', delete_document, name='delete_document'),
    #To do list
	#path('update_task/<str:pk>/', updateTask, name="update_task"),
	#path('delete/<str:pk>/', deleteTask, name="delete"),
    #Clock
]