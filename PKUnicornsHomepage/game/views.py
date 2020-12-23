from django.shortcuts import render

# Create your views here.
def gamehouse(request):
    return render(request, 'gamehouse.html',{})

def aobidao(request):
    return render(request, 'game/webgame/aobidao.html',{})

def saierhao(request):
    return render(request, 'game/webgame/saierhao.html',{})

def aolaxing(request):
    return render(request, 'game/webgame/aolaxing.html',{})

def xiaohuaxian(request):
    return render(request, 'game/webgame/xiaohuaxian.html',{})

def jiantousheji(request):
    return render(request, 'game/localgame/jiantousheji.html',{})

def piano(request):
    return render(request, 'game/localgame/piano.html',{})

def laqiao(request):
    return render(request, 'game/localgame/laqiao.html',{})

def elsfk(request):
    return render(request, 'game/localgame/elsfk.html',{})
