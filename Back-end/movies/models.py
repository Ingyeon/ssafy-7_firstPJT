from django.conf import settings
from django.db import models

# Create your models here.


class Genre(models.Model):
    name = models.CharField(max_length=50)

class Movie(models.Model):
    title = models.CharField(max_length=100)
    release_date = models.DateField()
    popularity = models.FloatField()
    overview = models.TextField()
    poster_path = models.CharField(max_length=200)
    movie_id = models.IntegerField()
    genre_id = models.IntegerField()
    genres = models.ManyToManyField(Genre,related_name='genre')
    movie_like = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='movie')
    