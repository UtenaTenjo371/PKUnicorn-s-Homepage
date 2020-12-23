from django.urls import path
from . import views

app_name = 'tools'

urlpatterns =[
    path('tools',views.tc,name='tc')
    
    # 例如: /game/5/
    #('<int:question_id>/', views.detail,name='detail'),

]

    