from django.shortcuts import get_object_or_404
from django.db.models import Count
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MovieSerializer
from .models import Movie,Genre
from .component import movie_API

# Create your views here.

@api_view(['GET'])
def movie_list(request):
    movies = movie_API()
    movie_data = Movie.objects.all()
    if movies:
        serializer = MovieSerializer(movie_data,many=True)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


