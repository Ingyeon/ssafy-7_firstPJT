from rest_framework import serializers
from django.contrib.auth import get_user_model


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('pk', 'username', 'email', 'like_reviews', 'reviews','movie','followers')
        # 'like_movie' 필드 오류 발생으로 인해 제외
        

        
