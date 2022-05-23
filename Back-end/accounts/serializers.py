from rest_framework import serializers
from django.contrib.auth import get_user_model
from community.models import Review

class ProfileSerializer(serializers.ModelSerializer):
    
    class ReviewSerializer(serializers.ModelSerializer):
        class Meta:
            model = Review
            fields = ('pk', 'title', 'content')
    
    like_reviews = ReviewSerializer(many=True)
    reviews = ReviewSerializer(many=True)
    
    class Meta:
        model = get_user_model()
        fields = ('pk', 'username', 'email', 'like_reviews', 'reviews','followers')
        # 'like_movie' 필드 오류 발생으로 인해 제외
