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
    
    # 이 부분이 json 데이터를 장고의 데이터 형식으로 파싱시키기 위함입니다.
    # instance 내부의 변수명은 model의 필드명이니 이 부분은 맞게 넣으시면 됩니다.
    
    Movie.objects.all().delete()
    for movie in movies['results']:
        instance = Movie.objects.create(
        title = movie['title'],
        release_date = movie['release_date'],
        popularity = movie['popularity'],
        overview = movie['overview'],
        poster_path = movie['poster_path'],
        movie_id = movie['id'],
        genre_id = movie['genre_ids'][0],
        )
        instance.save()
    return movies

# 장르명 담을 API
def genre_API():
    url = 'https://api.themoviedb.org/3'
    path = '/genre/movie/list'
    params = {
        'api_key': '143a27aa8ba75a3d662d1f05a4e1b4f9',
        'language': 'ko',
        'region': 'KR',
    }
    genres = requests.get(url + path+'?',params=params).json()
    Genre.objects.all().delete()
    for genre in genres['genres']:
        instance = Genre.objects.create(
    name = genre['name'],
    genre_id = genre['id'],
    )
    instance.save()
    return genres




# 현재 문제 -> model명 동일하면 model 뒤에 들어가는데 이거 때문에 model을 더 만들어야 하나? 
# 더 복잡해질텐데 어떻게 하는게 좋을지...
# 현재 상영중인 영화 API  -> 현재는 안쓰기

# def now_movie_API():
#     url = 'https://api.themoviedb.org/3'
#     path = '/movie/now_playing'
#     params = {
#         'api_key': '143a27aa8ba75a3d662d1f05a4e1b4f9',
#         'language': 'ko',
#         'region': 'KR',
#     }
#     movies = requests.get(url + path+'?',params=params).json()
    
#     for movie in movies['results']:
#         instance = Movie.objects.create(
#         title = movie['title'],
#         release_date = movie['release_date'],
#         popularity = movie['popularity'],
#         overview = movie['overview'],
#         poster_path = movie['poster_path'],
#         movie_id = movie['id'],
#         genre_id = movie['genre_ids'][0],
#         )
#         instance.save()
#     return movies


