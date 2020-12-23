from django.shortcuts import render

# Create your views here.
def tc(request):
    return render(request, 'tools/tc.html')
