
from django.shortcuts import render

# Create your views here.

# 添加 index 函数，返回 index.html 页面
def index(request):
    return render(request, 'index.html')

# Create your views here.
