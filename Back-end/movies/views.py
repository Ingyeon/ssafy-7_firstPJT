from asyncio.windows_events import NULL
from django.shortcuts import get_object_or_404
from django.db.models import Count
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MovieSerializer,GenreSerializer
from .models import Movie,Genre
from .component import movie_API,genre_API

# Create your views here.

# 서버 켜고 끌 때마다 데이터 중복으로 쌓이는 문제 발생 중
@api_view(['GET'])
def movie_list(request):
    movie_API()
    movie_data = Movie.objects.all()
    serializer = MovieSerializer(movie_data,many=True)
    return Response(serializer.data)

# genre 모델에 넣은 후 직렬화시켜야 하는지에 대해 지금 애매한 상황입니다.
# 제가 사용했을떈 mtm 필드에만 사용해서 직렬화의 필요성이 없었는데 일단 해놓겠습니다.
@api_view(['GET'])
def genre_list(request):
    genre_API()
    genre_data = Genre.objects.all()
    serializer = GenreSerializer(genre_data,many=True)
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
        
    
    