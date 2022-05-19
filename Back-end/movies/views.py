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

# 현재 tmdb api 디버깅해야 할 사항
# 함수 여러번 불러오면 중복 데이터가 쌓이는 문제 발생, 서버 키고 끌때마다 
# 중복 생성됨

# 시도한 방법들
# 1. if문 flag 분기
# 2. 따로 분리해서 독립 실행
# 3. 컴포넌트 제거 후 view 내에서 모두 해결

# 생각했지만 구현못한 방법
# 1. 서버가 꺼지거나 켜질 때 model db 초기화


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