from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ProfileSerializer
# Create your views here.

def profile(request,username):
    user = get_object_or_404(get_user_model(),username=username)
    serializer = ProfileSerializer(user)
    return Response(serializer.data)

