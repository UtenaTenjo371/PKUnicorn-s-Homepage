from django.urls import path
from . import views

app_name = 'game'

urlpatterns =[
    path('',views.gamehouse,name='gamehouse'),
    path('aobidao',views.aobidao,name='aobidao'),
    path('saierhao',views.saierhao,name='saierhao'),
    path('aolaxing',views.aolaxing,name='aolaxing'),
    path('xiaohuaxian',views.xiaohuaxian,name='xiaohuaxian'),
    path('jiantousheji',views.jiantousheji,name='jiantousheji'),
    path('piano', views.piano, name='piano'),
    path('laqiao', views.laqiao, name='laqiao'),
    path('elsfk', views.elsfk, name='elsfk'),
    # 例如: /game/5/
    #('<int:question_id>/', views.detail,name='detail'),

]
