from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    path('', views.movie_list),  # 기본 영화 리스트
    path('genre/',views.genre_list), # 장르명 및 장르id 리스트
    path('detail/<int:movie_id>/', views.movie_detail), # 영화 세부 정보 페이지 용
    # path('<int:genre_id>/sorted/', views.movie_sorted), #nav bar 장르 분류용
]