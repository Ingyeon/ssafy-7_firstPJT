from pyexpat import model
from django.db import models
from django.conf import settings
from movies.models import Movie
# Create your models here.

class Review(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name='review')
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='movie_review')
    title = models.CharField(max_length=100)
    rank = models.FloatField()
    content = models.TextField()
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_reviews')
    

class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name='comments')
    review = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
