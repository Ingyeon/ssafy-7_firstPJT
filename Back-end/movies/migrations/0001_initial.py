# Generated by Django 3.2.12 on 2022-05-26 01:34

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Similar',
            fields=[
                ('title', models.CharField(max_length=100, null=True)),
                ('release_date', models.DateField(null=True)),
                ('popularity', models.FloatField(null=True)),
                ('overview', models.TextField(null=True)),
                ('poster_path', models.CharField(max_length=200, null=True)),
                ('movie_id', models.IntegerField(primary_key=True, serialize=False)),
                ('genre_id', models.IntegerField(null=True)),
                ('movie_like', models.ManyToManyField(related_name='similar', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('title', models.CharField(max_length=100, null=True)),
                ('release_date', models.DateField(null=True)),
                ('popularity', models.FloatField(null=True)),
                ('overview', models.TextField(null=True)),
                ('poster_path', models.CharField(max_length=200, null=True)),
                ('movie_id', models.IntegerField(primary_key=True, serialize=False)),
                ('genre_id', models.IntegerField(null=True)),
                ('movie_like', models.ManyToManyField(related_name='movie', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
