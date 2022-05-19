from urllib import response
from django.shortcuts import get_object_or_404
from django.db.models import Count
import requests
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MovieSerializer
from .models import Movie,Genre
import json


# Create your views here.

# 임시 API 함수
def movie_API():
    url = 'https://api.themoviedb.org/3'
    path = '/movie/popular'   # 임시 설정, 추후 movie_API의 인자를 받음
    params = {
        'api_key': '143a27aa8ba75a3d662d1f05a4e1b4f9',
        'language': 'ko',
        'region': 'KR',
    }
    movies = requests.get(url + path+'?',params=params).json()
    
    for movie in movies['results']:
        instance = Movie.objects.create(
        title = movie['title'],
        )
    instance.save()
    print(instance)
    return movies

# 현재 문제: json을 파이썬의 딕셔너리 형태로 파싱해서 모델로 불러오기


@api_view(['GET'])
def movie_list(request):
    movies = movie_API()
    movie_data = Movie.objects.all()
    if movies:
        serializer = MovieSerializer(movie_data,many=True)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

