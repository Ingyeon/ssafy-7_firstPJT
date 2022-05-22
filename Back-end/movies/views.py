from django.shortcuts import get_object_or_404
from django.db.models import Count
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MovieSerializer
from .models import Movie
from .component import movie_API,genre_API,get_similar_movie_API

# Create your views here.

@api_view(['GET'])
def movie_list(request):
    movie_API()
    movie_data = Movie.objects.all()
    serializer = MovieSerializer(movie_data,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def movie_detail(request,movie_id):
    movie = get_object_or_404(Movie, movie_id=movie_id)
    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)

@api_view(['POST'])
def like_movie(request,movie_id):
    movie = get_object_or_404(Movie, movie_id=movie_id)
    user = request.user
    
    # 영화 좋아요 했다면 좋아요 취소
    if movie.movie_like.filter(pk=user.pk).exist():
        movie.movie_like.remove(user)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)
    # 아니라면 좋아요
    else:
        movie.movie_like.add(user)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)
        

# 추천 알고리즘 - 비슷한 영화 추천
@api_view(['GET'])
def similar_movie(request,movie_id):
    get_similar_movie_API(movie_id)
    movie_data = Movie.objects.all()
    serializer = MovieSerializer(movie_data,many=True)
    return Response(serializer.data)

# 장르별 영화
@api_view(['GET'])
def genre_movie(request,genre_id):
    genre_API(genre_id)
    movie_data = Movie.objects.all()
    serializer = MovieSerializer(movie_data,many=True)
    return Response(serializer.data)