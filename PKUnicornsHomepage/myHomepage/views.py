from django.shortcuts import loader,redirect
from django.http import HttpResponse, Http404
from django.template import Context
from django.template.loader import get_template
from django.contrib.auth.models import User
from .models import BookMark

# Create your views here.

# 添加 index 函数，返回 index.html 页面
def index(request):
    username="PKUnicorn"
    try:
        user = User.objects.get(username=username)
    except AttributeError:
        raise Http404('Requested user not found.')
    bookmarks = user.bookmark_set.all()
    template = get_template('index.html')
    variables = {
            'username': username,
            'bookmarks': bookmarks
    }
    output = template.render(variables)
    return HttpResponse(output)

def delete_document(request, markid):
    bookmark = BookMark.objects.get(pk=markid)
    bookmark.delete()

    return redirect('/tools?markid=0')