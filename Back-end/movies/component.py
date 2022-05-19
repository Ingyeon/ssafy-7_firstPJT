import requests
from .models import Movie,Genre


# 인기순 영화 정보 저장
def movie_API():
    url = 'https://api.themoviedb.org/3'
    path = '/movie/popular'
    params = {
        'api_key': '143a27aa8ba75a3d662d1f05a4e1b4f9',
        'language': 'ko',
        'region': 'KR',
    }
    movies = requests.get(url + path+'?',params=params).json()
    
    for movie in movies['results']:
        instance = Movie.objects.create(
        title = movie['title'],
        release_date = movie['release_date'],
        popularity = movie['popularity'],
        overview = movie['overview'],
        poster_path = movie['poster_path'],
        genre_id = movie['genre_ids'][0],
        )
        instance.save()
    return movies

