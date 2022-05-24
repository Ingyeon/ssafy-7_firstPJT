from django.urls import path
from . import views

app_name = 'community'

urlpatterns = [
    # review용 api
    path('', views.review_list),
    # path('<int:movie_id>', views.movie_review_list),
    # path('<int:movie_id>/create/', views.review_create),
    path('create/', views.review_create),
    path('<int:review_pk>/',views.review_detail_or_update_or_delete),
    path('<int:review_pk>/like/',views.like_review),
    
    #comment용 api
    path('<int:review_pk>/comments/', views.create_comment),
    path('<int:review_pk>/comments/<int:comment_pk>/', views.comment_update_or_delete)
]