from django.urls import path
from . import views

app_name = 'game'

urlpatterns =[
    path('',views.index,name='game'),
    
    # 例如: /game/5/
    #('<int:question_id>/', views.detail,name='detail'),

]
